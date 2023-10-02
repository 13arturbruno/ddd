"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = __importDefault(require("./order"));
const order_item_1 = __importDefault(require("./order_item"));
describe("Order unit tests", () => {
    it('should throw error when id is empty', () => {
        expect(() => {
            let order = new order_1.default("", "1", []);
        }).toThrowError("Id is required");
    });
    it('should throw error when customerId is empty', () => {
        expect(() => {
            let order = new order_1.default("1", "", []);
        }).toThrowError("customerId is required");
    });
    it('should throw error when items is empty', () => {
        expect(() => {
            let order = new order_1.default("1", "1", []);
        }).toThrowError("Items are required");
    });
    it('should calculate total', () => {
        const item1 = new order_item_1.default("1", "Item 1", 50, "p1", 2);
        const item2 = new order_item_1.default("2", "Item 2", 40, "p2", 2);
        const order1 = new order_1.default("1", "1", [item1]);
        const total1 = order1.total();
        // QUANTITY * price
        expect(total1).toBe(100);
        const order2 = new order_1.default("2", "1", [item1, item2]);
        const total2 = order2.total();
        // QUANTITY * price
        expect(total2).toBe(180);
    });
    it('should throw error if the item qtd is less or equal zero', () => {
        expect(() => {
            const item = new order_item_1.default("1", "Item 1", 50, "p1", 0);
            const order = new order_1.default("1", "1", [item]);
        }).toThrowError("Quantity must be greater than zero");
    });
});
