class Gadget {
    constructor({ name, screenSize, ram }) {
        this.name = name || "";
        this.screenSize = screenSize || 0;
        this.ram = ram || 0;
    }

    description() {
        return "Default description";
    }
}

class Laptop extends Gadget {
    constructor(attributes) {
        super(attributes);
    }

    description() {
        return `Laptop ${this.name} with screen size ${this.screenSize} inch and RAM ${this.ram} G`;
    }
}

class Tablet extends Gadget {
    constructor(attributes) {
        super(attributes);
    }

    description() {
        return `Tablet ${this.name} with screen size ${this.screenSize} inch`;
    }
}

class Creator {
    fabricMethod() {
        return new Gadget();
    }
}

export class LaptopCreator extends Creator {
    fabricMethod(attributes) {
        return new Laptop(attributes);
    }
}

export class TabletCreator extends Creator {
    fabricMethod(attributes) {
        return new Tablet(attributes);
    }
}