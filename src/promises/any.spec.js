const toDelayedRejectedPromise = (valueToReject, time) => {
    return new Promise((resolve, reject) => {
        setTimeout(reject, time, valueToReject);
    });
};

const toDelayedResolvedPromise = (valueToResolve, time) => {
    return new Promise((resolve) => {
        setTimeout(resolve, time, valueToResolve);
    });
};

test("Promise.any(): will resolve when first finished input promise resolves", () => {    
    const immediatelyRejectedPromise = new Promise((resolve, reject) => {
        reject("Immediately rejected promise");
    });

    const promiseTimeout200Result = "first resolved promise";
    const promiseTimeout200 = toDelayedResolvedPromise(promiseTimeout200Result, 200);

    const promiseTimeout100Result = "second resolved promise";
    const promiseTimeout100 = toDelayedResolvedPromise(promiseTimeout100Result, 100);

    const result = () => {
        return Promise.any([immediatelyRejectedPromise, promiseTimeout200, promiseTimeout100]);
    };

    return result().then(result => {
        expect(result).toEqual(promiseTimeout100Result);
    });
});

test("Promise.any(): rejects with an AggregateError when all input promises reject", () => {
    const immediatelyRejectedPromise = new Promise((resolve, reject) => {
        reject("Immediately rejected promise");
    });
    const promiseTimeout200Result = "Delayed rejected promise";
    const promiseTimeout200 = toDelayedRejectedPromise(promiseTimeout200Result, 200);

    const result = () => {
        return Promise.any([immediatelyRejectedPromise, promiseTimeout200]);
    };

    return result().catch(error => {
        expect(error.message).toEqual("All promises were rejected");
    });
});