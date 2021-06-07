class AbstractGadgetFactory {
    createLaptop(attributes) {
        return new AbstractLaptop(attributes);
    }

    createTablet(attributes) {
        return new AbstractTablet(attributes);
    }
}

class AbstractLaptop {
    constructor({ name, screenSize, ram }) {
        this.brand = "General brand";
        this.name = name || "";
        this.screenSize = screenSize || 0;
        this.ram = ram || 0;
    }
}

class AbstractTablet {
    constructor({ name, screenSize, ram }) {
        this.brand = "General brand";
        this.name = name || "";
        this.screenSize = screenSize || 0;
        this.ram = ram || 0;
    }
}

// Concrete factory 1
export class DellFactory extends AbstractGadgetFactory {
    createLaptop(attributes) {
        return new DellLaptop(attributes);
    }

    createTablet(attributes) {
        return new DellTablet(attributes);
    }
}

class DellLaptop extends AbstractLaptop {
    constructor(attributes) {
        super(attributes);
        this.brand = "Dell";
    }
}

class DellTablet extends AbstractTablet {
    constructor(attributes) {
        super(attributes);
        this.brand = "Dell";
    }
}

// Concrete factory 2
export class AsusFactory extends AbstractGadgetFactory {
    createLaptop(attributes) {
        return new AsusLaptop(attributes);
    }

    createTablet(attributes) {
        return new AsusTablet(attributes);
    }
}

class AsusLaptop extends AbstractLaptop {
    constructor(attributes) {
        super(attributes);
        this.brand = "Asus";
    }
}

class AsusTablet extends AbstractTablet {
    constructor(attributes) {
        super(attributes);
        this.brand = "Asus";
    }
}

export class GadgetStore {
    constructor(factory) {
        this.factory = factory;
    }

    getLaptop(config) {
        return this.factory.createLaptop(config);
    }

    getTablet(config) {
        return this.factory.createTablet(config);
    }
}