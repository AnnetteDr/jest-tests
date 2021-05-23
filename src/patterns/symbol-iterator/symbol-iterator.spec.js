import { ObjectIterator } from "./symbol-iterator";

const iterableObject = {
    first: 1,
    second: 2,
    third: 3,
    [Symbol.iterator]() {
        return new ObjectIterator(this); 
    }
}

test("object can be iterated with for of", () => {
    let valueAccumulator = [];

    for (let item of iterableObject) {
        valueAccumulator.push(item);
    }

    expect(valueAccumulator).toEqual([1, 2, 3]);
});

test("object can be transformed into array using Array.from", () => {
    const arrayFromObject = Array.from(iterableObject);

    expect(arrayFromObject).toEqual([1, 2, 3]);
});

test("spread operator can be applied to the object as iterable", () => {
    const arrayFromObject = [...iterableObject];

    expect(arrayFromObject).toEqual([1, 2, 3]);
});

test("object can be destructured as iterable", () => {
    const [first, ...rest] = iterableObject;

    expect(rest).toEqual([2, 3]);
});