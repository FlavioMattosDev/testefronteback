const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'admin',
  host: 'localhost',
  port: 5432,
  database: 'ecommerceirede',
});

module.exports = pool;

// 1 | tenis
// 2 | blusa
// 3 | acessorios
// 4 | calcas