import OrderItem from "../entity/order_item";
import Order from "../entity/order";
import OrderService from "./order.service";

describe("Order service unit test", () => {

    it('should get total of all orders', () => {
        const item1 = new OrderItem("1", "Item 1",  50, "p1", 1);
        const item2 = new OrderItem("2", "Item 2",  40, "p2", 2);

        const order1 = new Order("1", "1", [item1]);
        const order2 = new Order("2", "1", [item2]);

        const total = OrderService.total([order1, order2]);

        expect(total).toBe(130)
    });

})