test("Promise.allSettled(): will run after all given promises finish", () => {
    const toDelayedPromise = (valueToReject, time) => {
        return new Promise((resolve, reject) => {
            setTimeout(reject, time, valueToReject);
        });
    };
    
    const promiseTimeout200Error = "first promise rejected";
    const promiseTimeout200 = toDelayedPromise(promiseTimeout200Error, 200);

    const pureString = "second promise resolved";

    const result = function() {
        return Promise.allSettled([promiseTimeout200, pureString]);
    }

    return result().then(result => {
        expect(result).toEqual([
                { status: "rejected", reason: promiseTimeout200Error },
                { status: "fulfilled", value: pureString },
            ]);
    });
});
