import { LaptopCreator, TabletCreator } from './factory-method';
import { dellLaptopConfig, dellTabletConfig } from '../constants';

let laptopByConcreteCreator = new LaptopCreator().fabricMethod(dellLaptopConfig);
let tabletByConcreteCreator = new TabletCreator().fabricMethod(dellTabletConfig);

test("subclasses override factory method of parent class to create classes of different types", () => {
    expect(laptopByConcreteCreator.description()).toEqual("Laptop Dell G3 with screen size 15 inch and RAM 16 G");
    expect(tabletByConcreteCreator.description()).toEqual("Tablet Dell In12 with screen size 6 inch");
});