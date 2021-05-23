//Test 1
const _ = require("lodash");

const filter = (fn, arr) => {
    return arr.filter(fn);
}

const numbersOnly =_.partial(filter, (item) => typeof item === "number");

const mixedArray = ["string", 1, 4, 5, false];

test("removes all non-numeric values from array", () => {
    expect(numbersOnly(mixedArray)).toEqual([1, 4, 5]);
});

//Test 2
const calculateSkip = (totalCount, pageNumber, pageSize) => {
    if (pageNumber <= totalCount / pageSize) {
        return pageSize * (pageNumber - 1);
    } else {
        return null;
    }
}

const calculateSkipPartial = _.partial(calculateSkip, 50, _, 5);

test("calculates skip for the second page", () => {
    expect(calculateSkipPartial(2)).toEqual(5);
});
   