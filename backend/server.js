const express = require("express");

const app = express();

const productRoutes = require("./routes/productRoutes");

const PORT = 5000;

app.use(express.json());

app.use("/api", productRoutes);

app.get("/", (req, res) => {
    res.send("Smarter Blinkit Backend Running");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});