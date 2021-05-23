export class ObjectIterator {
    #iterable;
    #keys;
    #position = 0;

    constructor(obj) {
        this.#iterable = obj;
        this.#keys = Object.keys(this.#iterable);
    }

    next() {
        if (!this.hasNext()) {
            return { done: true };
        }

        return {
            value: this.#iterable[this.#keys[this.#position++]],
            done: false
        };
    }

    hasNext() {
        return this.#position < this.#keys.length;
    }
}