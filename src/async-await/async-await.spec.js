const toDelayedResolvedPromise = (valueToResolve, time) => {
    return new Promise((resolve) => {
        setTimeout(resolve, time, valueToResolve);
    });
};

test("async function resolves to a calculated value", () => {
    async function calculate() {
        const promiseTimeout100Result = 10;
        const promiseTimeout100 = toDelayedResolvedPromise(promiseTimeout100Result, 200);
    
        const promiseTimeout200Result = 20;
        const promiseTimeout200 = toDelayedResolvedPromise(promiseTimeout200Result, 200);
    
        const promiseTimeout100Response = await promiseTimeout100;
        const promiseTimeout200Response = await promiseTimeout200;
    
        const result = promiseTimeout100Response + promiseTimeout200Response;
      
        return result;
    }
    
    return calculate().then((result) => {
        expect(result).toEqual(30);
    });
});

