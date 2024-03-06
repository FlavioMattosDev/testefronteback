const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const pool = require('./db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Rota de cadastro de usuários
app.post('/usuarios', async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(senha, 10);
        const newUser = await pool.query('INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING *', [nome, email, hashedPassword]);
        res.status(201).json(newUser.rows[0]);
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
});

// Rota de login de usuários
app.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
      const user = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
      if (user.rows.length === 0) {
          return res.status(401).json({ message: 'Usuário não encontrado' });
      }

      // Verificar a senha usando bcrypt
      const passwordMatch = await bcrypt.compare(senha, user.rows[0].senha);
      if (!passwordMatch) {
          return res.status(401).json({ message: 'Senha incorreta' });
      }

      // Se as credenciais estiverem corretas, gerar e enviar o token JWT
      const token = jwt.sign({ id: user.rows[0].id, email: user.rows[0].email }, 'secret', { expiresIn: '1h' });

      res.status(200).json({ token });
  } catch (error) {
      console.error('Erro ao fazer login:', error.message);
      res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

// Middleware para verificar e decodificar o token JWT
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) {
        return res.status(401).json({ message: 'Token JWT ausente' });
    }

    jwt.verify(token, 'secreto', (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Token JWT inválido' });
        }
        req.user = user;
        next();
    });
};

// Rota de obtenção de produtos
app.get('/produtos', async (req, res) => {
  try {
      const produtos = await pool.query('SELECT * FROM produtos');
      res.json(produtos.rows);
  } catch (error) {
      console.error('Erro ao obter produtos:', error.message);
      res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

// Rota para obter produtos por categoria
app.get('/produtosPorCategoria', async (req, res) => {
    const { categoria } = req.query;
    try {
        const produtosPorCategoria = await pool.query('SELECT * FROM produtos WHERE categoria_id IN (SELECT id FROM categorias WHERE nome = $1)', [categoria]);
        res.json(produtosPorCategoria.rows);
    } catch (error) {
        console.error('Erro ao obter produtos por categoria:', error.message);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
});

// Rota para obter todas as categorias
app.get('/categorias', async (req, res) => {
    try {
        const categorias = await pool.query('SELECT * FROM categorias');
        res.json(categorias.rows);
    } catch (error) {
        console.error('Erro ao obter categorias:', error.message);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
