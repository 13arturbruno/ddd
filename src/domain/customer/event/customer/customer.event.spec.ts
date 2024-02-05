import EventDispatcher from "../../@shared/event/event-dispatcher";
import EnviaConsoleLog1Handler from "./handler/envia-console-log1-handler";
import EnviaConsoleLog2Handler from "./handler/envia-console-log2-handler";
import CustomerCreatedEvent from "./customer-created.event";
import Customer from "../../customer/entity/customer";
import Address from "../../customer/value-object/address";
import EnviaConsoleLogHandler from "./handler/envia-console-log-handler";
import CustomerUpdatedEvent from "./customer-updated.event";

describe('Customer Events Test', () => {

    it('should notify handlers when a customer is created', async () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler1 = new EnviaConsoleLog1Handler();
        const eventHandler2 = new EnviaConsoleLog2Handler();
        const spyEventHandler1 = jest.spyOn(eventHandler1, "handle");
        const spyEventHandler2 = jest.spyOn(eventHandler2, "handle");

        eventDispatcher.register("CustomerCreatedEvent", eventHandler1);
        eventDispatcher.register("CustomerCreatedEvent", eventHandler2);

        expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"][0]).toMatchObject(eventHandler1);
        expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"][1]).toMatchObject(eventHandler2);

        const customer = new Customer("1", "Customer 1");
        customer.Address = new Address("Street 1", 1, "Zipcode 1", "City 1");

        const customerCreatedEvent = new CustomerCreatedEvent(customer);

        eventDispatcher.notify(customerCreatedEvent);

        expect(spyEventHandler1).toHaveBeenCalled();
        expect(spyEventHandler2).toHaveBeenCalled();
    });

    it('should notify handlers when a customer is updated', async () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new EnviaConsoleLogHandler();
        const spyEventHandler = jest.spyOn(eventHandler, "handle");

        eventDispatcher.register("CustomerUpdatedEvent", eventHandler);

        expect(eventDispatcher.getEventHandlers["CustomerUpdatedEvent"][0]).toMatchObject(eventHandler);

        const customer = new Customer("1", "Customer 1");
        customer.Address = new Address("Street1", 1, "Zipcode1", "City1");

        const newAddress = new Address("Street2", 2, "Zipcode2", "City2");
        customer.changeAddress(newAddress);

        const customerUpdatedEvent = new CustomerUpdatedEvent(customer);

        eventDispatcher.notify(customerUpdatedEvent);

        expect(spyEventHandler).toHaveBeenCalled();
    });

});