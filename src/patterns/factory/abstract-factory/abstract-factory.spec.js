import { DellFactory, AsusFactory, GadgetStore } from './abstract-factory';
import { dellLaptopConfig, dellTabletConfig, asusLaptopConfig, asusTabletConfig } from '../constants';

let dellStore = new GadgetStore(new DellFactory());
let dellLaptop = dellStore.getLaptop(dellLaptopConfig);
let dellTablet = dellStore.getTablet(dellTabletConfig);

let asusStore = new GadgetStore(new AsusFactory());
let asusLaptop = asusStore.getLaptop(asusLaptopConfig);
let asusTablet = asusStore.getTablet(asusTabletConfig);

test("concrete factories create products of one family", () => {
    expect(dellLaptop.brand).toEqual(dellTablet.brand);
    expect(asusLaptop.brand).toEqual(asusTablet.brand);
});

