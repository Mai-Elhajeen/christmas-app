// Add code here 
const connection = require('../config/connection');

const getProducts = () => {
  const sql = {
    text: 'SELECT * FROM products;',
    values: []
  };

  return connection.query(sql)
};

module.exports = getProducts;