const express = require("express");
const router = express.Router();

let cart = [];

//  Get all cart items
router.get("/showcart", (req, res) => {
  res.json(cart);
});

// Add product to cart
router.post("/addtocart", (req, res) => {
  const product = req.body;
  cart.push(product);
  res.json({ message: "Product added to cart", cart });
});

// Remove product from cart
router.delete("/removefromcart/:id", (req, res) => {
  const id = parseInt(req.params.id);
  cart = cart.filter((item) => item.id !== id);
  res.json({ message: "Product removed from cart", cart });
});

// Get total price
router.get("/totalprice", (req, res) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  res.json({ total });
});

module.exports = router;
