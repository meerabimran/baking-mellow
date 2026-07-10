const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
require("dotenv").config();

const app = express();

// =======================
// Debug Environment Variables
// =======================
console.log("================================");
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("PORT:", process.env.PORT);
console.log("MONGO_URI:", process.env.MONGO_URI);
console.log("JWT_SECRET:", process.env.JWT_SECRET);
console.log("================================");

// =======================
// Middleware
// =======================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors({
    origin: true,
    credentials: true
}));

// =======================
// Static Files
// =======================
app.use(express.static(path.join(__dirname, "public")));

// =======================
// Routes
// =======================
const authRoutes = require("./routes/auth");
const orderRoutes = require("./routes/orders");
const contactRoutes = require("./routes/contact");

app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/contact", contactRoutes);

// =======================
// Frontend Routes
// =======================
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// =======================
// MongoDB Connection
// =======================
async function connectDB() {
    try {
        console.log("Connecting to MongoDB...");

        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 10000
        });

        console.log("✅ MongoDB Connected Successfully");

    } catch (err) {
        console.error("❌ MongoDB Connection Error");
        console.error(err);
    }
}

// =======================
// Start Server
// =======================
const PORT = process.env.PORT || 3000;

async function startServer() {

    await connectDB();

    app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
    });

}

startServer();

module.exports = app;