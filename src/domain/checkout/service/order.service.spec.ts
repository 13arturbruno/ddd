import OrderItem from "../entity/order_item";
import Order from "../entity/order";
import OrderService from "./order.service";
import Customer from "../../customer/entity/customer";

describe("Order service unit test", () => {

    it('should place an order', () => {
        const customer = new  Customer("1", "Raizo");

        const item = new OrderItem("1", "Item 1",  50, "p1", 1);

        const order = OrderService.placeOrder(customer, [item])

        expect(customer.rewardPoints).toBe(25)
        expect(order.total()).toBe(50)
    });

    it('should get total of all orders', () => {
        const item1 = new OrderItem("1", "Item 1",  50, "p1", 1);
        const item2 = new OrderItem("2", "Item 2",  40, "p2", 2);

        const order1 = new Order("1", "1", [item1]);
        const order2 = new Order("2", "1", [item2]);

        const total = OrderService.total([order1, order2]);

        expect(total).toBe(130)
    });

})