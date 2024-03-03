const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const pool = require('./db');
const port = 5000;

app.use(cors());
app.use(express.json());

// Middleware para analisar corpos de solicitação JSON
app.use(bodyParser.json());

// Rota de cadastro de usuários
app.post('/usuarios', async (req, res) => {
    const { nome, email, senha } = req.body;
  
    try {
      // Insira o novo usuário no banco de dados
      const newUser = await pool.query('INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING *', [nome, email, senha]);
      res.status(201).json(newUser.rows[0]); // Retorne o novo usuário criado
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  });

// Rota de autenticação para verificar as credenciais do usuário
app.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    // Consultar o banco de dados para encontrar o usuário com o email fornecido
    const user = await pool.query('SELECT * FROM usuarios WHERE email = $1', [
      email,
    ]);

    // Verificar se o usuário foi encontrado no banco de dados
    if (user.rows.length === 0) {
      console.error('Erro ao fazer login:', 'Usuário não encontrado');
      return res.status(401).json({ message: 'Usuário não encontrado' });
    }

    // Verificar se a senha fornecida corresponde à senha armazenada no banco de dados
    if (senha !== user.rows[0].senha) {
      console.error('Erro ao fazer login:', 'Senha incorreta');
      return res.status(401).json({ message: 'Senha incorreta' });
    }

    // Se as credenciais forem válidas, envie uma resposta de sucesso
    res.status(200).json({ message: 'Login bem-sucedido!' });
  } catch (error) {
    console.error('Erro ao fazer login:', error.response ? error.response.data.message : error.message);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

// Rota para obter todos os produtos
app.get('/produtos', async (req, res) => {
    try {
      // Consultar o banco de dados para obter todos os produtos
      const produtos = await pool.query('SELECT * FROM produtos');
      res.json(produtos.rows);
    } catch (error) {
      console.error('Erro ao obter produtos:', error.response ? error.response.data.message : error.message);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  });

  // Rota para obter produtos por categoria
app.get('/produtosPorCategoria', async (req, res) => {
    const { categoria } = req.query;
    try {
      // Consultar o banco de dados para obter os produtos filtrados pela categoria
      const produtosPorCategoria = await pool.query('SELECT * FROM produtos WHERE categoria_id IN (SELECT id FROM categorias WHERE nome = $1)', [categoria]);
      res.json(produtosPorCategoria.rows);
    } catch (error) {
      console.error('Erro ao obter produtos por categoria:', error.response ? error.response.data.message : error.message);
      res.status(500).json({ message: 'Erro interno do servidor' });
    }
  });

  // Rota para obter todas as categorias
app.get('/categorias', async (req, res) => {
    try {
        // Consultar o banco de dados para obter todas as categorias
        const categorias = await pool.query('SELECT * FROM categorias');
        res.json(categorias.rows);
    } catch (error) {
        console.error('Erro ao obter categorias:', error.response ? error.response.data.message : error.message);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
