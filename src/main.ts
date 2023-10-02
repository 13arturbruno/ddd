import Customer from "./entity/customer";
import Address from "./entity/address";
import Order from "./entity/order";
import OrderItem from "./entity/order_item";

// Customer aggregate - ID relation
let customer = new Customer("1", "Artur");
const address = new Address("Rua AB", 1, "61700000", "Ceará")
customer.Address = address;
customer.activate();

// Order aggregate - Object relation
const item1 = new OrderItem("1", "item 1", 50);
const item2 = new OrderItem("2", "item 2", 20);
const order = new Order("1", "123", [item1, item2])