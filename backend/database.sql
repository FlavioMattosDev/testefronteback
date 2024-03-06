CREATE DATABASE ecommerceirede;

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    imagem TEXT
);

CREATE TABLE categorias (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);

CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    categoria_id INT REFERENCES categorias(id) NOT NULL,
    quantidade INT NOT NULL,
    preco NUMERIC(10, 2) NOT NULL,
    imagem TEXT
);

CREATE TABLE vendas (
    id SERIAL PRIMARY KEY,
    data DATE NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'Esperando Pagamento'
);

CREATE TABLE itens (
    id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES usuarios(id) NOT NULL,
    produto_id INT REFERENCES produtos(id) NOT NULL,
    venda_id INT REFERENCES vendas(id) NOT NULL,
    quantidade INT NOT NULL,
    preco NUMERIC(10, 2) NOT NULL
);

ALTER TABLE produtos
ADD COLUMN descricao TEXT;

UPDATE produtos
SET descricao = 'Descrição do produto'
WHERE id = produto_id;
