const toDelayedResolvedPromise = (valueToResolve, time) => {
    return new Promise((resolve) => {
        setTimeout(resolve, time, valueToResolve);
    });
};

const toDelayedRejectedPromise = (valueToReject, time) => {
    return new Promise((resolve, reject) => {
        setTimeout(reject, time, valueToReject);
    });
};


test("Promise.race(): will resolve when first finished input promise resolves", () => {
    const promiseTimeout200ErrorMessage = "first promise rejected";
    const promiseTimeout200 = toDelayedRejectedPromise(promiseTimeout200ErrorMessage, 200);

    const promiseTimeout100Result = "second promise resolved";
    const promiseTimeout100 = toDelayedResolvedPromise(promiseTimeout100Result, 100);

    const result = () => {
        return Promise.race([promiseTimeout200, promiseTimeout100]);
    };

    return result().then(result => {
        expect(result).toEqual(promiseTimeout100Result);
    });
});

test("Promise.race(): will reject when first finished input promise rejects", () => {
    const promiseTimeout100ErrorMessage = "first promise rejected";
    const promiseTimeout100 = toDelayedRejectedPromise(promiseTimeout100ErrorMessage, 100);

    const promiseTimeout200Result = "second promise resolved";
    const promiseTimeout200 = toDelayedResolvedPromise(promiseTimeout200Result, 200);

    const result = () => {
        return Promise.race([promiseTimeout200, promiseTimeout100]);
    };

    return result().catch(error => {
        expect(error).toEqual(promiseTimeout100ErrorMessage);
    });
});
