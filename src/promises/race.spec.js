test("Promise.race() returns promise that resolves when one of the input promises resolves", () => {
    const p1 = new Promise((resolve, reject) => {
        setTimeout(reject, 200, "first promise rejected");
    });

    const p2 = new Promise((resolve, reject) => {
        setTimeout(resolve, 100, "second promise resolved");
    });

    let result = function() {
        return Promise.race([p1, p2]);
    }

    return result().then(result => {
        expect(result).toEqual("second promise resolved");
    });
});


test("Promise.race() returns promise that rejects when one of the input promises rejects", () => {
    const p1 = new Promise((resolve, reject) => {
        setTimeout(reject, 100, "first promise rejected");
    });

    const p2 = new Promise((resolve, reject) => {
        setTimeout(resolve, 200, "second promise resolved");
    });

    let result = function() {
        return Promise.race([p1, p2]);
    }

    return result().catch(error => {
        expect(error).toEqual("first promise rejected");
    });
});
