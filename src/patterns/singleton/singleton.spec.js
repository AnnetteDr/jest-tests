import { Singleton } from "./singleton";

let singletonA, singletonB;

beforeAll(() => {
    singletonA = Singleton.getInstance();
    singletonB = Singleton.getInstance();
});

test("both variables contain the same object instance", () => {
    expect(singletonA).toEqual(singletonB);
});