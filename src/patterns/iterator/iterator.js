export class Iterator {
    #collection;
    #position = 0;
    #reverse;
    
    constructor(collection, reverse = false) {
        this.#collection = collection;
        this.#reverse = reverse;

        if (reverse) {
            this.#position = collection.getCount() - 1;
        }
    }

    current() {
        return this.#collection.getItems()[this.#position];
    }
 
    next() {
        if (!this.hasNext()) {
            return null;
        }

        const element = this.#collection.getItems()[this.#position];
        this.#position += this.#reverse ? -1 : 1;

        return element;
    }
    
    prev() {
        if (!this.hasNext()) {
            return null;
        }

        const element = this.#collection.getItems()[this.#position];
        this.#position += this.#reverse ? 1 : -1;

        return element;
    }

    hasNext() {
        if (this.#reverse) {
            return this.#position >= 0;
        }

        return this.#position < this.#collection.getCount();
    }
    
    rewind() {
        this.#position = this.#reverse ? this.#collection.getCount() - 1 : 0;
    }
}

export class Aggregator {
    #items = [];

    getItems() {
        return this.#items;
    }

    getCount() {
        return this.#items.length;
    }

    addItem(item) {
        this.#items.push(item);
    }

    getIterator() {
        return new Iterator(this);
    }

    getReverseIterator() {
        return new Iterator(this, true);
    }
}