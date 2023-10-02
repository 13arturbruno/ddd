import Customer from "./customer";
import Address from "./address";

describe("Customer unit tests", () => {
    it('should throw error when id is empty', () => {
        expect(() => {
            let costumer = new Customer("", "Chopper")
        }).toThrowError("Id is required")
    });

    it('should throw error when name is empty', () => {
        expect(() => {
            let costumer = new Customer("1", "")
        }).toThrowError("Name is required")
    });

    it('should change name', () => {
        // Arrange
        const customer = new  Customer("1", "Raizo");

        //Act
        customer.changeName("Chopper")

        //Assert
        expect(customer.name).toBe("Chopper")
    });

    it('should activate costumer', () => {
        const customer = new  Customer("1", "Raizo");
        const address = new  Address("Rua Três", 10, "61700-000", "Ceará");
        customer.Address = address;

        customer.activate();

        expect(customer.isActive).toBe(true)
    });

    it('should deactivate costumer', () => {
        const customer = new  Customer("1", "Raizo");

        customer.deactivate();

        expect(customer.isActive).toBe(false)
    });

    it('should throw error when address is undefined when you activate a customer', () => {
        expect(() => {
            const customer = new  Customer("1", "Raizo");
            customer.activate();
        }).toThrowError("Address is mandatory to activate a customer")
    });
})