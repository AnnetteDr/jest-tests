import { Aggregator } from "./iterator"; 

let collection;

beforeAll(() => {
    collection = new Aggregator();
    collection.addItem(1);
    collection.addItem(2);
    collection.addItem(3);
});

test("iterator goes over collection elements", () => {
    const iterator = collection.getIterator();
    const valueAccumulator = [];

    while (iterator.hasNext()) {
        valueAccumulator.push(iterator.next());
    }

    expect(valueAccumulator).toEqual([1, 2, 3]);
});

test("reverse iterator goes over collection elements in reverse sequence", () => {
    const reverseIterator = collection.getReverseIterator();
    const valueAccumulator = [];

    while (reverseIterator.hasNext()) {
        valueAccumulator.push(reverseIterator.next());
    }

    expect(valueAccumulator).toEqual([3, 2, 1]);
});
