import { ConcreteSubject, ObserverA, ObserverB } from "./observer";

let subject, observerA, observerB;

beforeAll(() => {
    subject = new ConcreteSubject();
    observerA = new ObserverA();
    observerB = new ObserverB();  

    subject.subscribe(observerA);   
    subject.subscribe(observerB);
});


test("subject notified both observerers about changes in its state", () => {
    subject.calculateRandomNumber();

    expect(observerA.state).toEqual(observerB.state);
});

test("subject notified its single subscriber about changes in its state", () => {
    subject.unsubscribe(observerB);
    subject.calculateRandomNumber();

    expect(observerA.state).not.toEqual(observerB.state);
}); //update to check if sbj contains observer in sbc list
