//lodash intersection
const { intersection } = require("lodash");

const firstArray = [1, 2, 3, 4, 5];
const secondArray = [2, 3, 6];

test("creates array of intersected values", () => {
    expect(intersection(firstArray, secondArray)).toEqual([2, 3]);
});

//Set intersection
const firstSet = new Set([1, 2, 3, 4, 5]);
const secondSet = new Set([2, 3, 6]);

const intersectionSet = (firstSet, secondSet) => {
    let _intersection = new Set();

    for (let elem of firstSet) {
        if (secondSet.has(elem)) {
            _intersection.add(elem);
        }
    }

    return _intersection;
}

test("creates Set of intersected values", () => {
    expect(intersectionSet(firstSet, secondSet)).toEqual(new Set([2, 3]));
});