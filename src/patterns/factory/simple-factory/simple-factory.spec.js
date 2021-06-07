import { Creator, Laptop, Tablet } from "./simple-factory";
import { dellLaptopConfig, dellTabletConfig } from '../constants';

let laptop = new Laptop(dellLaptopConfig);
let laptopBySimpleFactory = Creator.createGadget("laptop", dellLaptopConfig);

let tablet = new Tablet(dellTabletConfig);
let tabletBySimpleFactory = Creator.createGadget("tablet", dellTabletConfig);

test("simple factory creates objects depending on the provided type", () => {
    expect(laptopBySimpleFactory).toStrictEqual(laptop);
    expect(tabletBySimpleFactory).toStrictEqual(tablet);
});