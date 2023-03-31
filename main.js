const order1 = new Order('penna', 10, 1);
const order2 = new Order('matita', 100, 0.5);

const client1 = new Client('Pietro', 'Viglino', 'Via Balbi 10', [order1, order2]);

console.log(client1.toString());

const order3 = new Order('pinzatrici', 10, 10);

client1.addOrder(order3);

console.log(client1.toString());

const employee1 = new Employee('Simone', 'Maccarone', [client1]);

console.log(employee1.toString());

const order4 = new Order('penna', 1000, 1);
const order5 = new Order('scotch', 200, 2);

const client2 = new Client('Luis Alberto', 'Castro', 'Via XX settembre 10', [order4, order5]);

employee1.addClient(client2);

console.log(employee1.toString());

const manager1 = new Manager('Valentina', 'Cherubini', [employee1]);

console.log(manager1.toString());

const order6 = new Order('penna', 10000, 1);

const order7 = new Order('matita', 100000, 0.5);

const client3 = new Client('Jing', 'Wang', 'Via Albareto 10', [order6, order7]);

const employee2 = new Employee('Davide', 'Consigliere', [client3]);

manager1.hire(employee2);

console.log(manager1.toString());

manager1.fire(employee1);

console.log(manager1.toString());

