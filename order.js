class Order{
    
    constructor(product, quantity, unitPrice){
        this.product = product;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
    }

    totalPrice(){
        return this.quantity * this.unitPrice;
    }

    toString(){
        return `Prodotto: ${this.product}\n` +
               `Quantità: ${this.quantity}\n` +
               `Prezzo unitario: ${this.unitPrice.toFixed(2)}€\n` +
               `Prezzo totale: ${this.totalPrice().toFixed(2)}€\n`;
               
    }

}