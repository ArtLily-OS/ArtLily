import pkg from 'pg';
const { Pool } = pkg;
// const { Pool } = require('pg');

const PG_URI =
  'postgres://emozkqfo:h6pvxtcV0vBospTQR97Lgdk8Q5wxejG5@batyr.db.elephantsql.com/emozkqfo';

const pool = new Pool({
  connectionString: PG_URI,
});

pool.on('connect', () => {
  console.log('Connected to the database');
});

pool.on('error', (err) => {
  console.error('Error with database connection:', err.message);
});

export default function query(text, params, callback) {
  console.log('executed query', text);
  return pool.query(text, params, callback);
}
// module.exports = function query(text, params, callback) {
//   console.log('executed query', text);
//   return pool.query(text, params, callback);
// };
