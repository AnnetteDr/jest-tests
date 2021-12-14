test("Promise.resolves() returns promise that resolves with given value", () => {
    const result = Promise.resolve("promise resolved");

    return result.then(data => {
        expect(data).toEqual("promise resolved");
    });
});
