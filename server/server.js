const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

 const imagePath = path.join(__dirname, "productimages");
app.use("/productimages", express.static(imagePath));
console.log("✅ Serving images from:", imagePath);

 let products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
    image: "http://localhost:3200/productimages/laptop.jpg",
  },
  {
    id: 2,
    name: "Headphones",
    price: 2000,
    image: "http://localhost:3200/productimages/headphone.jpg",
  },
  {
    id: 3,
    name: "Mouse",
    price: 800,
    image: "http://localhost:3200/productimages/mouse.jpg",
  },
  {
    id: 4,
    name: "Keyboard",
    price: 500,
    image: "http://localhost:3200/productimages/keyboard.jpg", 
  },
];

let cart = [];
let discount = 0;

 app.get("/", (req, res) => {
  res.send("🛒 E-Commerce Cart Backend Running 🚀");
});

 app.get("/api/products", (req, res) => res.json(products));

// Cart routes
app.get("/api/cart", (req, res) => res.json(cart));

app.post("/api/cart", (req, res) => {
  const product = req.body;
  cart.push(product);
  res.json({ message: "Product added to cart", cart });
});

app.delete("/api/cart/:id", (req, res) => {
  const id = parseInt(req.params.id);
  cart = cart.filter((item) => item.id !== id);
  res.json({ message: "Item removed", cart });
});

//  Total, discount & tax
app.get("/api/cart/total", (req, res) => {
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const discounted = subtotal - (subtotal * discount) / 100;
  const tax = discounted * 0.1;
  const total = discounted + tax;

  res.json({
    subtotal,
    discountPercent: discount,
    discountedAmount: discounted,
    tax,
    total,
  });
});

// Discount code
app.post("/api/discount", (req, res) => {
  const { code } = req.body;
  if (code === "SAVE10") discount = 10;
  else if (code === "OFF50") discount = 50;
  else discount = 0;
  res.json({ message: "Discount applied", discount });
});

 const PORT = 3200;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
