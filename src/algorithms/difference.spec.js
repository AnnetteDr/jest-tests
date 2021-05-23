//lodash difference
const { difference } = require("lodash");

const firstArray = [1, 2, 3, 4, 5];
const secondArray = [2, 3, 6];

test("creates array of different values by first array", () => {
    expect(difference(firstArray, secondArray)).toEqual([1, 4, 5]);
});

//Set difference
const firstSet = new Set([1, 2, 3, 4, 5]);
const secondSet = new Set([2, 3, 6]);

const differenceSet = (firstSet, secondSet) => {
    let _difference = new Set(firstSet);

    for (let elem of secondSet) {
        _difference.delete(elem);
    }

    return _difference;
}

test("creates Set of different values by first Set", () => {
    expect(differenceSet(firstSet, secondSet)).toEqual(new Set([1, 4, 5]));
});