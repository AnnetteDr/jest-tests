import { LaptopCreator, TabletCreator } from './factory-method';

let laptopConfig = {
    name: "Dell G3",
    screenSize: 15,
    ram: 8,
}

let tabletConfig = {
    name: "Asus Inspirion",
    screenSize: 6,
}

let laptopByConcreteCreator = new LaptopCreator().fabricMethod(laptopConfig);
let tabletByConcreteCreator = new TabletCreator().fabricMethod(tabletConfig);

test("subclasses override factory method of parent class to create classes of different types", () => {
    expect(laptopByConcreteCreator.description()).toEqual("Laptop Dell G3 with screen size 15 inch and RAM 8 G");
    expect(tabletByConcreteCreator.description()).toEqual("Tablet Asus Inspirion with screen size 6 inch");
});