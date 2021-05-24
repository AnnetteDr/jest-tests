//Simple factory is an object which encapsulates the creation of another object, shielding that code from the rest of your application.
//Паттерн Простая фабрика  — это класс, в котором есть один метод с большим условным оператором, выбирающим создаваемый продукт. 
//Этот метод вызывают с неким параметром, по которому определяется какой из продуктов нужно создать. У простой фабрики, обычно, нет подклассов.\

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
