export class Coffee {
    getCost() {
        return 35;
    }

    getDescription() {
        return "Standart coffee";
    }
}

class CoffeeDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }

    getCost() {
        return this.coffee.getCost();
    }

    getDescription() {
        return this.coffee.getDescription();
    }
}

export class MilkCoffeeDecorator extends CoffeeDecorator {
    constructor(coffee) {
        super(coffee);
    }

    getCost() {
        return this.coffee.getCost() + 5;
    }

    getDescription() {
        return this.coffee.getDescription() + "with milk";
    }
}

export class VanillaCoffeeDecorator extends CoffeeDecorator {
    constructor(coffee) {
        super(coffee);
    }

    getCost() {
        return this.coffee.getCost() + 10;
    }

    getDescription() {
        return this.coffee.getDescription() + "with vanilla";
    }
}

export class CostCalculator {
    constructor(product) {
        this.product = product;
    }

    cost() {
        return this.product.getCost();
    }
} 
