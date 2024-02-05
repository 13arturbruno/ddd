import EventHandlerInterface from "../../../../@shared/event/event-handler.interface";
import CustomerCreatedEvent from "../customer-created.event";
import CustomerUpdatedEvent from "../customer-updated.event";

export default class EnviaConsoleLogHandler implements EventHandlerInterface<CustomerUpdatedEvent> {
    handle(event: CustomerUpdatedEvent): void {
        const { id, name, Address } = event.eventData;
        console.log(`Endereço do cliente: ${id}, ${name} alterado para: ${Address.street}, ${Address.number}, ${Address.city}, ${Address.zip}`);
    }
}