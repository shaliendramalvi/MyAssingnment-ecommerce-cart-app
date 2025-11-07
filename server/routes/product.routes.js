const express = require("express");
const router = express.Router();

 let products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Headphones", price: 2000 },
  { id: 3, name: "Mouse", price: 800 },
  { id: 4, name: "Keyboard", price: 1500 },
  { id: 5, name: "Monitor", price: 12000 },
];

//  Get all products
router.get("/showproducts", (req, res) => {
  res.json(products);
});

// Add a new product (optional for admin)
router.post("/addproduct", (req, res) => {
  const { name, price } = req.body;
  const id = products.length + 1;
  const newProduct = { id, name, price };
  products.push(newProduct);
  res.json({ message: "Product added successfully", product: newProduct });
});

module.exports = router;
