//always auto-validate
class Customer {
    _id: string;
    _name: string = "";
    _address: string = "";
    _active: boolean = true;

    constructor(id: string) {
        this._id = id;
    }

    //auto-validade
    validate() {
        if (this._name.length === 0) throw new Error("Name is required");
        if (this._id.length === 0) throw new Error("Id is required");
    }

    changeName(name: string) {
        this._name = name;
        this.validate();
    }

    activate() {
        this._active = true;
    }

    deactivate() {
        this._active = false;
    }
}

//wrong - inconsistent data
let customer = new Customer("1")