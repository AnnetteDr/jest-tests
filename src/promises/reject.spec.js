test("Promise.reject() returns promise that rejects", () => {
    const result = Promise.reject(new Error("promise rejected"));

    return result.catch(error => {
        expect(error.message).toEqual("promise rejected");
    });
});
