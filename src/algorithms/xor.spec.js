//lodash xor (symmetric difference)
const { xor } = require("lodash");

const firstArray = [1, 2, 3, 4, 5];
const secondArray = [2, 3, 6, 7];

test("creates array of symmetric difference", () => {
    expect(xor(firstArray, secondArray)).toEqual([1, 4, 5, 6, 7]);
});

//Set symmetric difference
const firstSet = new Set([1, 2, 3, 4, 5]);
const secondSet = new Set([2, 3, 6, 7]);

const symmetricDifference = (firstSet, secondSet) => {
    let _difference = new Set(firstSet);

    for (let elem of secondSet) {
        if (_difference.has(elem)) {
            _difference.delete(elem);
        } else {
            _difference.add(elem);
        }
    }

    return _difference;
}

test("creates Set of symmetric difference", () => {
    expect(symmetricDifference(firstSet, secondSet)).toEqual(new Set([1, 4, 5, 6, 7]));
});