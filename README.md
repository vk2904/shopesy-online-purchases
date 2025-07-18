# ShopEZ - Online Shopping Platform

ShopEZ is a full-stack e-commerce web application that allows users to browse, search, and purchase products across various categories. It features user authentication, product management, cart and order management, and an admin dashboard for managing users, products, and orders.

## Video Demonstration

[Project Demo Video](https://drive.google.com/file/d/1STntYGIJPmIHG_0YWecXMZMbdIQQxeKb/view?usp=drivesdk)

---

## Features

- User registration and login (customer & admin roles)
- Browse products by category
- Product search and filtering
- Shopping cart management
- Place orders (single product or cart checkout)
- View and manage user profile and orders
- Admin dashboard for managing products, users, and orders
- Add/update/delete products (admin)
- Order status management (admin)
- Responsive UI with React and Vite

---

## Tech Stack

- **Frontend:** React, React Router, Axios, Vite, CSS
- **Backend:** Node.js, Express.js, MongoDB (Mongoose), bcrypt
- **Other:** Bootstrap, React Icons, CORS

---

## Folder Structure

```
shopesy-online-purchases-main/
│
├── code/
│   ├── client/         # Frontend React app
│   │   ├── src/
│   │   │   ├── components/      # Reusable UI components
│   │   │   ├── context/         # React context for global state
│   │   │   ├── pages/           # Page components (Home, Auth, Admin, etc.)
│   │   │   ├── styles/          # CSS files
│   │   │   └── ...
│   │   ├── public/              # Static assets
│   │   ├── package.json         # Client dependencies
│   │   └── ...
│   └── server/         # Backend Express server
│       ├── index.js            # Main server file (API endpoints)
│       ├── Schema.js           # Mongoose models
│       ├── package.json        # Server dependencies
│       └── ...
└── README.md           # Project documentation
```

---

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm (v8+ recommended)
- MongoDB (local or cloud instance)

### 1. Clone the repository
```bash
git clone <repo-url>
cd shopesy-online-purchases-main/code
```

### 2. Setup the Backend (Server)
```bash
cd server
npm install
```
- By default, the server connects to MongoDB at `mongodb://localhost:27017/shopEZ`.
- To change the database URI, edit the `mongoose.connect` line in `index.js`.

#### Start the server:
```bash
node index.js
```
- The server runs on [http://localhost:6001](http://localhost:6001)

### 3. Setup the Frontend (Client)
```bash
cd ../client
npm install
```

#### Start the client:
```bash
npm run dev
```
- The client runs on [http://localhost:5173](http://localhost:5173) (default Vite port)

---

## Usage

- Register as a new user or login as an existing user.
- Browse products, add to cart, and place orders.
- Admin users can manage products, users, and orders from the admin dashboard.

---

## API Overview (Server Endpoints)

- `POST   /register`           - Register a new user
- `POST   /login`              - User login
- `GET    /fetch-banner`       - Get homepage banner
- `GET    /fetch-users`        - List all users
- `GET    /fetch-products`     - List all products
- `GET    /fetch-product-details/:id` - Get product details
- `GET    /fetch-orders`       - List all orders
- `GET    /fetch-categories`   - List all categories
- `POST   /add-new-product`    - Add a new product (admin)
- `PUT    /update-product/:id` - Update a product (admin)
- `POST   /update-banner`      - Update homepage banner (admin)
- `POST   /buy-product`        - Place an order for a product
- `PUT    /cancel-order`       - Cancel an order
- `PUT    /update-order-status`- Update order status (admin)
- `GET    /fetch-cart`         - Get cart items
- `POST   /add-to-cart`        - Add item to cart
- `PUT    /increase-cart-quantity` - Increase cart item quantity
- `PUT    /decrease-cart-quantity` - Decrease cart item quantity
- `PUT    /remove-item`        - Remove item from cart
- `POST   /place-cart-order`   - Place order for all cart items

---

## Additional Documentation

See the `Documentation/` folder for:
- Project design, planning, and requirements docs
- Solution architecture and user stories

---

## License

This project is for educational/demo purposes.
