import { Coffee, MilkCoffeeDecorator, VanillaCoffeeDecorator, CostCalculator } from "./decorator";

const coffee = new Coffee();
const coffeeWithMilk = new MilkCoffeeDecorator(coffee);
const coffeeWithVanillaAndMilks = new VanillaCoffeeDecorator(coffeeWithMilk);

const coffeeCost = new CostCalculator(coffee).cost();
const coffeeWithMilkCost = new CostCalculator(coffeeWithMilk).cost(); 
const coffeeWithVanillaAndMilksCost = new CostCalculator(coffeeWithVanillaAndMilks).cost(); 

test("milk coffee costs 5 UAH more than standard coffee", () => {
    expect(coffeeWithMilkCost - coffeeCost).toEqual(5);
});

test("coffee with vanilla and milk costs 15 UAH more than standard coffee", () => {
    expect(coffeeWithVanillaAndMilksCost - coffeeCost).toEqual(15);
});
