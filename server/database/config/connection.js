// Add code here 
require('env2')('.env');
const { Pool } = require('pg');

let DB_URL = '';
if (process.env.NODE_ENV === 'production') {
  DB_URL = process.env.DB_PRODUCTION
}
if (process.env.NODE_ENV === 'development') {
  DB_URL = process.env.DB_URL_DEV
} else if (process.env.NODE_ENV === 'test') {
  DB_URL = process.env.DB_TESTING_URL
} else {
  throw new Error('DB_URL NOT FOUND!');
};

const connection = new Pool({
  connectionString: DB_URL,
  ssl: false
});

module.exports = connection;