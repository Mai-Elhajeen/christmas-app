// Add code here 
const connection = require("../config/connection");

const addProduct = (name, description, image, price) => {
    const sql = {
        text: `INSERT INTO products (name, description, image, price) VALUES ($1, $2, $3, $4) RETURNING *;`,
        values: [name, description, image, price]
    };
    connection.query(sql)
}

module.exports = addProduct;