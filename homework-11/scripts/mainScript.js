//________Task-1_______//
class Human {
    constructor(name,sex) {}
}
const humanInfo = new Human('Dmitriy','male');
const humanInfo1 = new Human('Andrew','male');
const humanInfo2 = new Human('Nasty','female');
const humanInfo3 = new Human('Dina','female');

class Flat {
    #arrayOfResidents = [];
    getResident (humanInfo) {
        this.#arrayOfResidents.push(humanInfo);
    }
}
const flatInfo = new Flat();
flatInfo.getResident(humanInfo);
console.log(flatInfo);

const flatInfo1 = new Flat();
flatInfo1.getResident(humanInfo1);
console.log(flatInfo1);

const flatInfo2 = new Flat();
flatInfo2.getResident(humanInfo2);
console.log(flatInfo2);

const flatInfo3 = new Flat();
flatInfo3.getResident(humanInfo3);
console.log(flatInfo3);

class House {
    #arrayOfFlats = [];
    constructor(maxQuantityOfFlats) {
        this.maxQuantityOfFlats = maxQuantityOfFlats;
    }
    addFlat (flatInfo) {
        if (this.maxQuantityOfFlats > 2) {
            this.#arrayOfFlats.push(flatInfo);
        }
        else {
            console.log('Недостаточно квартир в данном доме')
        }
    }
}
const houseInfo = new House(36);
houseInfo.addFlat(flatInfo);
houseInfo.addFlat(flatInfo3);
console.log(houseInfo);

const houseInfo1 = new House(26);
houseInfo1.addFlat(flatInfo1);
houseInfo1.addFlat(flatInfo2);
console.log(houseInfo1);









//________Task-2_______//
class Hamburger {
    constructor(size,stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }
    static get SIZE_SMALL () {
        return {
            name: 'SIZE_SMALL',
            price: 50,
            calories: 20
        }
    };
    static get SIZE_HUGE () {
        return {
            name: 'SIZE_HUGE',
            price: 100,
            calories: 40
        }
    };
    static get STUFFING_CHEESE () {
        return {
            name: 'STUFFING_CHEESE',
            price: 10,
            calories: 20
        }
    };
    static get STUFFING_SALAD () {
        return {
            name: 'STUFFING_SALAD',
            price: 20,
            calories: 5
        }
    };
    static get STUFFING_POTATOE () {
        return {
            name: 'STUFFING_POTATOE',
            price: 15,
            calories: 10
        }
    };
    static get TOPPING_SAUCE () {
        return {
            name: 'TOPPING_SAUCE',
            price: 15,
            calories: 0
        }
    };
    static get TOPPING_MAYO () {
        return {
            name: 'TOPPING_MAYO',
            price: 20,
            calories: 5
        }
    };
    addTopping (topping) {
        this.toppings.push(topping);
        return this;
    }
    calculateCalories () {
        const toppingCalories = this.toppings.reduce(function (prev,topping) {
            return prev + topping.calories;
        },0);
        return this.size.calories + this.stuffing.calories + toppingCalories;
    }
    calculatePrice () {
        const toppingPrice = this.toppings.reduce(function (prev, topping) {
            return prev + topping.price
        },0);
        return this.size.price + this.stuffing.price + toppingPrice;
    }
}
// маленький гамбургер з начинкою з сыру //
let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// спрашиваем сколько калорий
console.log('Calories: ' + hamburger.calculateCalories ());

// тут я передумал и решил добавить еще приправу
hamburger.addTopping(Hamburger .TOPPING_SAUCE);

// Сколько теперь стоит?
console.log('Price with sauce:' + hamburger.calculatePrice());
