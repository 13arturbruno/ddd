"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customer_1 = __importDefault(require("./customer"));
const address_1 = __importDefault(require("./address"));
describe("Customer unit tests", () => {
    it('should throw error when id is empty', () => {
        expect(() => {
            let costumer = new customer_1.default("", "Chopper");
        }).toThrowError("Id is required");
    });
    it('should throw error when name is empty', () => {
        expect(() => {
            let costumer = new customer_1.default("1", "");
        }).toThrowError("Name is required");
    });
    it('should change name', () => {
        // Arrange
        const customer = new customer_1.default("1", "Raizo");
        //Act
        customer.changeName("Chopper");
        //Assert
        expect(customer.name).toBe("Chopper");
    });
    it('should activate costumer', () => {
        const customer = new customer_1.default("1", "Raizo");
        const address = new address_1.default("Rua Três", 10, "61700-000", "Ceará");
        customer.Address = address;
        customer.activate();
        expect(customer.isActive).toBe(true);
    });
    it('should deactivate costumer', () => {
        const customer = new customer_1.default("1", "Raizo");
        customer.deactivate();
        expect(customer.isActive).toBe(false);
    });
    it('should throw error when address is undefined when you activate a customer', () => {
        expect(() => {
            const customer = new customer_1.default("1", "Raizo");
            customer.activate();
        }).toThrowError("Address is mandatory to activate a customer");
    });
});
