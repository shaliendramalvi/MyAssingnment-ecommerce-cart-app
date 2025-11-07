import React, { useEffect, useState } from "react";
import "./App.css";

const API_BASE = "http://localhost:3200/api";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [summary, setSummary] = useState({});
  const [discountCode, setDiscountCode] = useState("");

  const loadData = async () => {
    const prodData = await fetch(`${API_BASE}/products`).then((r) => r.json());
    const cartData = await fetch(`${API_BASE}/cart`).then((r) => r.json());
    const totalData = await fetch(`${API_BASE}/cart/total`).then((r) => r.json());
    setProducts(prodData);
    setCart(cartData);
    setSummary(totalData);
  };

  useEffect(() => {
    loadData();
  }, []);

  const addToCart = async (product) => {
    await fetch(`${API_BASE}/cart`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    loadData();
  };

  const removeFromCart = async (id) => {
    await fetch(`${API_BASE}/cart/${id}`, { method: "DELETE" });
    loadData();
  };

  const applyDiscount = async () => {
    await fetch(`${API_BASE}/discount`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code: discountCode }),
    });
    loadData();
  };

  return (
    <div className="container">
      <h1>🛍️ E-Commerce Cart System</h1>

      {/* Product List */}
      <div className="product-section">
        <h2>Available Products</h2>
        {products.map((p) => (
          <div key={p.id} className="product-item">
            <div className="product-info">
              <img src={p.image} alt={p.name} className="product-img" />
              <div>
                <h3>{p.name}</h3>
                <p>₹{p.price}</p>
              </div>
            </div>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Cart */}
      <div className="cart-section">
        <h2>Your Cart ({cart.length} items)</h2>
        {cart.length === 0 ? (
          <p className="empty-cart">No items in cart</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <span>
                {item.name} — ₹{item.price}
              </span>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))
        )}

        {/* Discount Section */}
        <div className="discount-box">
          <input
            type="text"
            placeholder="Enter discount code (SAVE10 or OFF50)"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
          />
          <button onClick={applyDiscount}>Apply</button>
        </div>

        {/* Summary */}
        <div className="total-box">
          <p>Subtotal: ₹{summary.subtotal || 0}</p>
          <p>Discount: {summary.discountPercent || 0}%</p>
          <p>Tax (10%): ₹{summary.tax?.toFixed(2) || 0}</p>
          <h3>Total: ₹{summary.total?.toFixed(2) || 0}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
