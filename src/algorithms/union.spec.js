//lodash union
const { union } = require("lodash");

const firstArray = [1, 2, 3, 4, 5];
const secondArray = [2, 3, 6];

test("creates array of unique values", () => {
    expect(union(firstArray, secondArray)).toEqual([1, 2, 3, 4, 5, 6]);
});

//Set union
const firstSet = new Set([1, 2, 3, 4, 5]);
const secondSet = new Set([2, 3, 6]);

const unionSet = (firstSet, secondSet) => {
    let _union = new Set(firstSet);

    for (let elem of secondSet) {
        _union.add(elem);
    }

    return _union;
}

test("creates Set of unique values", () => {
    expect(unionSet(firstSet, secondSet)).toEqual(new Set([1, 2, 3, 4, 5, 6]));
});