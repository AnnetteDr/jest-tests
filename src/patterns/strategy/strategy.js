export class Context {
    #strategy;

    constructor(strategy) {
        this.#strategy = strategy;
    }

    setStrategy(strategy) {
        this.#strategy = strategy;
    }
   
    executeStrategy(data) {
        return this.#strategy.execute(data);
    }
}
 
export class SortStrategy {
    execute(data) {
        return data.sort();
    }
}

export class ReverseSortStrategy {
    execute(data) {
        return data.reverse();
    }
}