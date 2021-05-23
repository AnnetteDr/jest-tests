import { Context, SortStrategy, ReverseSortStrategy } from "./strategy";

let context, sortedData;
let unsortedData = [4, 1, 3, 2];

beforeAll(() => {
    context = new Context(new SortStrategy());

    sortedData = context.executeStrategy(unsortedData); //expect [1, 2, 3, 4]
});

test("context can work with strategies interchangeably", () => {
    context.setStrategy(new ReverseSortStrategy());

    const reverseSortedData = context.executeStrategy(sortedData);

    expect(reverseSortedData).toEqual([4, 3, 2, 1]);
});