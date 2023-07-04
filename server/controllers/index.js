// Add code here 
const express = require("express");
const { getProducts, addProduct } = require("../database/queries");

const router = express.Router();

router.get('/products', (req, res) => {
  console.log(process.env.NODE_ENV);
  getProducts()
    .then(data => res.json(data.rows))
})

router.post('/add-product', (req, res) => {

  const { name, description, image, price } = req.body;

  let myPromise = new Promise((myResolve, myReject) => {
    myResolve(); // when successful
    myReject();  // when error
  });

  myPromise.then(
    addProduct(name, description, image, price)

  ).then(data => res.redirect('/'));
})

module.exports = router;