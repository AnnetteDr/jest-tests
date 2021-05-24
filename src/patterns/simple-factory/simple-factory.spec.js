import { Creator, Laptop, Tablet } from "./simple-factory";

let laptopConfig = {
    name: "Dell G3",
    screenSize: 15,
    ram: 8,
}

let tabletConfig = {
    name: "Asus Inspirion",
    screenSize: 6,
    ram: 4,
}

let laptop = new Laptop(laptopConfig);
let laptopBySimpleFactory = Creator.createGadget("laptop", laptopConfig);

let tablet = new Tablet(tabletConfig);
let tabletBySimpleFactory = Creator.createGadget("tablet", tabletConfig);

test("simple factory creates objects depending on the provided type", () => {
    expect(laptopBySimpleFactory).toStrictEqual(laptop);
    expect(tabletBySimpleFactory).toStrictEqual(tablet);
});