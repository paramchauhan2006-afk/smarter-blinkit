class Product {
    constructor(name, price, category, stock, sellerId, barcode) {
        this.id = Date.now();   // simple unique id
        this.name = name;
        this.price = price;
        this.category = category;
        this.stock = stock;
        this.sellerId = sellerId;
        this.barcode = barcode;
    }
}

module.exports = Product;