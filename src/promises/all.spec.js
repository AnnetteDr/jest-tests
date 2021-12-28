const toDelayedResolvedPromise = (valueToResolve, time) => {
    return new Promise((resolve) => {
        setTimeout(resolve, time, valueToResolve);
    });
};

const toDelayedRejectedPromise = (valueToResolve, time) => {
    return new Promise((resolve, reject) => {
        setTimeout(reject, time, valueToResolve);
    });
};

test("Promise.all(): will run when all given promises resolve", () => {
    const promiseTimeout200Result = "first";
    const promiseTimeout200 = toDelayedResolvedPromise(promiseTimeout200Result, 200);

    const pureString = "second";

    const promiseTimeout100Result = "third";
    const promiseTimeout100 = toDelayedResolvedPromise(promiseTimeout100Result, 100);

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

test("Promise.all(): will reject immediately when one of promises rejects", () => {
    const promiseTimeout200ErrorMessage = "first promise rejected";
    const promiseTimeout200 = toDelayedRejectedPromise(promiseTimeout200ErrorMessage, 200);

    const pureString = "second";

    const promiseTimeout100ErrorMessage = "third promise rejected";
    const promiseTimeout100 = toDelayedRejectedPromise(promiseTimeout100ErrorMessage, 100);

    const result = () => {
        return Promise.all([promiseTimeout200, pureString, promiseTimeout100]);
    };

    return result().catch((error) => {
        expect(error).toEqual(promiseTimeout100ErrorMessage);
    });
});
