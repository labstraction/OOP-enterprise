class Client extends Person {

    constructor(name, surname, address, orders = []) {
        super(name, surname);
        this.address = address;
        this.orders = orders;
    }

    addOrder(newOrder) {
        this.orders.push(newOrder);
    }

    totalOrdersPrice() {
        let totale = 0;
        for (let i = 0; i < this.orders.length; i++) {
            const order = this.orders[i];
            totale += order.totalPrice();
        }
        return totale;
    }

    // totalOrdersPrice2() {
    //     return this.orders.reduce((previous, current) => {
    //         previous += current.totalPrice();
    //         return previous;
    //     }, 0);


    // }

    toString() {
        let description = super.toString() +
            `Indirizzo: ${this.address}\n` +
            `Numero ordini: ${this.orders.length}\n` +
            `Spesa totale: ${this.totalOrdersPrice().toFixed(2)} €\n` +
            `Lista ordini:\n`

        for (let i = 0; i < this.orders.length; i++) {
            const orders = this.orders[i];
            description += '-------------\n';
            description += orders.toString();
        }
        return description;
    }

    // toString2() {
    //     return super.toString() +
    //         `Indirizzo: ${this.address}\n` +
    //         `Numero ordini: ${this.orders.length}\n` +
    //         `Spesa totale: ${this.totalOrdersPrice().toFixed(2)} €\n` +
    //         `Lista ordini:\n-----------\n` + this.orders.join('-----------\n');
    // }



}