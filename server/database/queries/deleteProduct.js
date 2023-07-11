// Add code here 
const connection = require('../config/connection');

const deleteProduct = (id) => {
  const sql = {
    text: 'DELETE FROM products WHERE "id" = $1;',
    values: [id]
  };

  return connection.query(sql)
};

module.exports = deleteProduct;