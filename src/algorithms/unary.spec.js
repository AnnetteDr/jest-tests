const { unary } = require("lodash");

const unaryParseInt = unary(parseInt);

test("parses a string argument ignoring radix", () => {
    expect(unaryParseInt("100", 16)).not.toBe(256);
});