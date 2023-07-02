// Add code here 
const express = require("express");
const { getProducts } = require("../database/queries");

const router = express.Router();

router.get('/products', (req, res) => {
  console.log(process.env.NODE_ENV);
  getProducts()
    .then(data => res.json(data.rows))
})

module.exports = router;