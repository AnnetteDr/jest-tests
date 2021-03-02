const { partial } = require('lodash');

const filter = (fn, arr) => {
    return arr.filter(fn);
}

const numbersOnly = partial(filter, (item) => typeof item === "number");

const mixedArray = ["string", 1, 4, 5, false];

test('removes all non-numeric values from array', () => {
    expect(numbersOnly(mixedArray)).toEqual([1, 4, 5]);
});
