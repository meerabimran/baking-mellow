# 🍰 Baking Mellow - Premium Bakery E-Commerce Platform

![Baking Mellow Logo](screenshots/logo.png)

**Baking Mellow** is a fully functional, modern e-commerce website built for a premium bakery based in Sargodha, Pakistan. The platform allows customers to browse a curated menu of cakes, cupcakes, donuts, brownies, bouquets, and gift baskets, add items to a cart, and place orders securely.

> **⚠️ Note:** This is a **full-stack project** currently under active development. It features a Node.js/Express backend, MongoDB database, and a responsive frontend with a premium glassmorphism design.

---

## 📸 Screenshots

### 🏠 Home Page
![Home Page 1](screenshots/home.png)
*The hero section features a beautiful bakery background, clear CTAs, and a categorized product grid.*

### 📋 Full Menu Page
![Menu Page](screenshots/menu.png)
*Products are organized by categories (Cakes, Cupcakes, Donuts, Brownies, Bouquets, Gift Baskets). Each product includes an image, description, size/quantity options, and an "Add to Cart" button.*

### 📖 About Us Page
![About Us Page](screenshots/about.png)
*The story behind Baking Mellow, including a timeline, mission, vision, values, and a comprehensive FAQ section.*

### 📲 Connect & Social Page
![Social Page](screenshots/social.png)
*Social media integration with Instagram, Facebook, WhatsApp, and a beautiful image gallery.*

### 📞 Contact Page
![Contact Page](screenshots/contact.png)
*A functional contact form alongside business hours, Google Maps integration, and contact cards.*

### 🔐 Authentication Pages
![Sign Up](screenshots/signup.png) | ![Login](screenshots/login.png)
*A seamless sign-up and login flow with JWT authentication and MongoDB storage.*

### 🛒 Shopping Cart & Checkout
![Cart Page](screenshots/cart.png)
*Users can update quantities, remove items, and view a real-time total calculation.*

![Checkout Page](screenshots/checkout.png)
*A secure checkout confirmation page that validates user login before processing orders.*

---

## ✨ Features

- **Dynamic Frontend:** Built with HTML, CSS, and vanilla JavaScript.
- **Interactive Menu:** 30+ products with size/quantity selectors.
- **Shopping Cart:** Persistent storage using `localStorage` with update/remove capabilities.
- **Order System:** Secure order creation linked to logged-in users.
- **Authentication:** JWT-based user Login and Signup system.
- **Database:** MongoDB Atlas for storing Users, Orders, and Newsletter subscribers.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop views.
- **Animations:** Smooth scroll and hover animations for enhanced user experience.
- **Newsletter:** Subscribe form connected to the backend to store emails.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla), FontAwesome
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas, Mongoose ODM
- **Authentication:** JSON Web Tokens (JWT), Cookie Parser
- **Deployment:** Railway (Backend), GitHub Pages (Frontend)

---

## 🚀 How to Run Locally

To get a local copy up and running, follow these simple steps.

### Prerequisites
- Node.js installed on your machine.
- A MongoDB Atlas account (or local MongoDB instance).
- A code editor (VS Code recommended).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/meerabimran/baking-mellow.git
   cd baking-mellow