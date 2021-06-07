export class Laptop {
    constructor({ name, screenSize, ram }) {
        this.name = name || "";
        this.screenSize = screenSize || 0;
        this.ram = ram || 0;
    }
}

export class Tablet {
    constructor({ name, screenSize, ram }) {
        this.name = name || "";
        this.screenSize = screenSize || 0;
        this.ram = ram || 0;
    }
}

export class Creator {
    static createGadget(type, attributes) {
        return type === "laptop" ? 
            new Laptop(attributes) 
            : new Tablet(attributes);
    }
}
