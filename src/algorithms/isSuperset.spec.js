//lodash solution
const { intersection, difference } = require("lodash");

const array = [1, 2, 3, 4, 5];
const subsetArray = [2, 3];

const isSupersetWithIntersection = (array, subsetArray) => {
    return intersection(array, subsetArray).length === subsetArray.length;
}

test("checks if intersection of two arrays equals subset array's length", () => {
    expect(isSupersetWithIntersection(array, subsetArray)).toBeTruthy();
});

const isSupersetWithDifference = (array, subsetArray) => {
    return difference(subsetArray, array).length === 0;
}

test("checks if one array has no different values than the other one", () => {
    expect(isSupersetWithDifference(array, subsetArray)).toBeTruthy();
});

//Set isSuperset
const set = new Set([1, 2, 3, 4, 5]);
const subset = new Set([2, 3]);

const isSuperset = (set, subset) => {
    for (let elem of subset) {
        if (!set.has(elem)) {
            return false;
        }
    }
    
    return true;
}

test("checks if set includes subset", () => {
    expect(isSuperset(set, subset)).toBeTruthy();
});