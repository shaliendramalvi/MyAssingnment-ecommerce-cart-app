# MyAssingnment-ecommerce-cart-app
My E-Commerce Cart System is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The system provides a complete online shopping experience for customers, allowing them to browse products,.
🛒 E-Commerce Cart System
This is a full-stack E-commerce Cart Application built with MERN stack (MongoDB, Express.js, React.js, Node.js).
The application provides users with a seamless shopping experience including product listing, cart management, discount codes, and a real-time summary of totals with taxes.

🚀 Features
Product Management:
Displays a list of products with images, names, and prices. Products are served from the backend API.

Cart Functionality:
Users can add products to the cart, remove products, and view the total price.

Discount Codes:
Supports discount codes like SAVE10 (10% off) and OFF50 (50% off).

Cart Summary:
Shows subtotal, discount applied, tax (10%), and total amount dynamically.

Responsive Frontend:
Built with React.js for a smooth and interactive user experience.

Backend API:
Node.js + Express.js backend serving products, cart operations, discount calculations, and images.

🧩 Tech Stack
Frontend: React.js, HTML5, CSS3, JavaScript
Backend: Node.js, Express.js
Database: None (uses in-memory arrays for demo purposes)
Image Hosting: Express static files (productimages folder)
API Endpoints: RESTful routes for products, cart, and discounts
⚙️ Installation & Setup
Clone the repository
git clone https://github.com/shaliendramalvi/MyAssingnment-ecommerce-cart-app.git
cd MyAssingnment-ecommerce-cart-app
                Install dependencies
npm install

Start Backend Server

node server.js

Server will run on: http://localhost:3200

Start Frontend

npm start

React app will run on: http://localhost:3200

Open in Browser
Visit http://localhost:3200 to use the E-Commerce Cart.

🔗 API Endpoints

GET /api/products — Fetch all products

GET /api/cart — Fetch all cart items

POST /api/cart — Add a product to cart

DELETE /api/cart/:id — Remove a product from cart

GET /api/cart/total — Get subtotal, discount, tax, and total

POST /api/discount — Apply a discount code (SAVE10 or OFF50)

💻 Project Structure
myecart/
├── client/ # React frontend
├── productimages/ # Product images
├── server.js # Node.js + Express backend
├── package.json
└── README.md

👨‍💻 Author

Shailendra Malvi
Full Stack Developer (MERN)
📧 shaliendramalvi081@gmail.com
