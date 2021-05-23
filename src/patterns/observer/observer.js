class Subject {
    observersList = [];
    state;

    subscribe(observer) {
        const isAlreadySubscribed = this.observersList.includes(observer);

        if (!isAlreadySubscribed) {
            this.observersList.push(observer);
        }
    }   

    unsubscribe(observer) { 
        this.observersList = this.observersList.filter((item) => item !== observer);
    }

    notify() {
        for (const observer of this.observersList) {
            observer.update(this.state);
        }
    }
}

export class ConcreteSubject extends Subject {
    calculateRandomNumber() {
        this.state = Math.random();

        this.notify();
    }
}

export class ObserverA { 
    state;

    update(data) {
        this.state = data;
    }
}

export class ObserverB { 
    state;

    update(data) {
        this.state = data;
    }
}