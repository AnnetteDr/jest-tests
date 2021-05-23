const { flow } = require('lodash');

const positiveNumbersOnly = (arr) => {
    return arr.filter(number => number > 0);
}

const sum = (arr) => {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
}

const sumPositiveNumbers = flow(positiveNumbersOnly, sum);

const numericArray = [1, -2, 3, -4, 5];

test('calculates sum of only positive numbers', () => {
    expect(sumPositiveNumbers(numericArray)).toEqual(9);
});