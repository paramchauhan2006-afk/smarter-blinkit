const express = require("express");

const connectDB = require("./config/db");

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

const PORT = 5000;

connectDB();

app.use(express.json());

app.use("/api", productRoutes);
app.use("/api", userRoutes);

app.get("/", (req, res) => {
    res.send("Smarter Blinkit Backend Running");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});