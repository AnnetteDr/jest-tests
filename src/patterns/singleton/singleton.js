export class Singleton {
    static #instance = null; 
    static #initializing = false;

    constructor() {  
        if (!Singleton.#initializing) { 
            throw new Error("The constructor is private, use getInstance method to initialize object");
        }  
    }

    static getInstance() {
        Singleton.#initializing = true;

        if (!Singleton.#instance) {
            Singleton.#instance = new Singleton();
        }

        Singleton.#initializing = false;

        return Singleton.#instance;
    }
}
