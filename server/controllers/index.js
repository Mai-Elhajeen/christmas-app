// Add code here 
const express = require("express");
const { getProducts, addProduct, deleteProduct } = require("../database/queries");

const router = express.Router();

router.get('/products', (req, res) => {
  console.log(process.env.NODE_ENV);
  getProducts()
    .then(data => res.json(data.rows))
})

router.post('/add-product', (req, res) => {

  const { name, description, image, price } = req.body;

  let myPromise = new Promise((myResolve, myReject) => {
    myResolve('successful'); // when successful
    myReject('error');  // when error
  });

  myPromise.then(
    addProduct(name, description, image, price)
  ).then(data => res.redirect('/'));
})

router.delete('/delete-product/:id', (req, res, next) => {
  const { id } = req.body;
  deleteProduct(id)
    .then(res.send({ message: 'deleted successfully' }))
    .then(data => res.redirect('/'))
    .catch((err) => next(err));
})

module.exports = router;

