test("Promise.all(): will run when all given promises resolve", () => {
    const toDelayedPromise = (valueToResolve, time) => {
        return new Promise((resolve) => {
            setTimeout(resolve, time, valueToResolve);
        });
    };

    const promiseTimeout200Result = "first";
    const promiseTimeout200 = toDelayedPromise(promiseTimeout200Result, 200);

    const pureString = "second";

    const promiseTimeout100Result = "third";
    const promiseTimeout100 = toDelayedPromise(promiseTimeout100Result, 100);

    const result = () => {
        return Promise.all([promiseTimeout200, pureString, promiseTimeout100]);
    };

    return result().then((data) => {
        expect(data).toEqual([
            promiseTimeout200Result,
            pureString,
            promiseTimeout100Result,
        ]);
    });
});

test("Promise.all() will reject immediately when one of promises rejects", () => {
    const toDelayedPromise = (valueToReject, time) => {
        return new Promise((resolve, reject) => {
            setTimeout(reject, time, valueToReject);
        });
    };

    const promiseTimeout200ErrorMessage = "first promise rejected";
    const promiseTimeout200 = toDelayedPromise(promiseTimeout200ErrorMessage, 200);

    const pureString = "second";

    const promiseTimeout100ErrorMessage = "third promise rejected";
    const promiseTimeout100 = toDelayedPromise(promiseTimeout100ErrorMessage, 100);

    const result = () => {
        return Promise.all([promiseTimeout200, pureString, promiseTimeout100]);
    };

    return result().catch((error) => {
        expect(error).toEqual("third promise rejected");
    });
});
