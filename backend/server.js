const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((error) => {
    console.log("MongoDB Connection Failed:", error);
});

// Routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

// Root
app.get("/", (req, res) => {
    res.send("Smarter Blinkit Backend Running");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});