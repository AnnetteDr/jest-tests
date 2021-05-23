const { curry } = require('lodash');

const multiply = (a, b, c) => {
    return a * b * c;
}

const curriedMultiply = curry(multiply);

test('multiplies all arguments provided to nested functions', () => {
    expect(curriedMultiply(1)(2)(3)).toEqual(6);
});

test('multiplies an arity number of arguments', () => {
    expect(curriedMultiply(1, 2, 3)).toEqual(6);
});