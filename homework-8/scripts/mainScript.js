//________Task-1______//
let users = [
    {
        "index": 0,
        "isActive": true,
        "balance": "$2,226.60",
        "name": "Eugenia Sawyer",
        "gender": "female",
        "phone": "+1 (840) 583-3207",
        "address": "949 John Street, Rose, Puerto Rico, 1857"
    },
    {
        "index": 1,
        "isActive": true,
        "balance": "$2,613.77",
        "name": "Pauline Gallegos",
        "gender": "female",
        "phone": "+1 (985) 593-3328",
        "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
    },
    {
        "index": 2,
        "isActive": false,
        "balance": "$3,976.41",
        "name": "Middleton Chaney",
        "gender": "male",
        "phone": "+1 (995) 591-2478",
        "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
    },
    {
        "index": 3,
        "isActive": true,
        "balance": "$1,934.58",
        "name": "Burns Poole",
        "gender": "male",
        "phone": "+1 (885) 559-3422",
        "address": "730 Seba Avenue, Osage, Alabama, 6290"
    },
    {
        "index": 4,
        "isActive": true,
        "balance": "$3,261.65",
        "name": "Mcfadden Horne",
        "gender": "male",
        "phone": "+1 (942) 565-3988",
        "address": "120 Scholes Street, Kirk, Michigan, 1018"
    },
    {
        "index": 5,
        "isActive": false,
        "balance": "$1,790.56",
        "name": "Suzette Lewis",
        "gender": "female",
        "phone": "+1 (837) 586-3283",
        "address": "314 Dunne Place, Bawcomville, Guam, 9053"
    }
]
function findRichBalance (array) {
    //Создаю переменную куда буду отправлять номера телефонов с балансом больше 2к$//
    let balanceMin2000 = [];
    //Создаю цикл для перебора массива//
    for (let key of array) {
        //Создаю переменную которая конвертирует строчное значение баланса в числовое
        const stringToNumber = +key["balance"].replaceAll(/[$,]/g, '');
        // Провожу сравнение переменной с числом 2000 (по заданию нужно сравнить с 2000)
        if (stringToNumber > 2000) {
            // Если данное значение прошло проверку добавляю номер телефона данного баланса в новый массив
            balanceMin2000.push(key["phone"]);
        }
    }
    //Возвращаю в консоль массив с номерами телефонов баланс которых больше 2к$//
    return console.log(balanceMin2000);
}
findRichBalance(users);

function sumBalance (array) {
    //Создаю переменную где буду суммировать значения балансов
    let sum = 0;
    //Создаю цикл для перебора массива//
    for (let key of array) {
        //Создаю переменную которая конвертирует строчное значение баланса в числовое
        const stringToNumber = +key["balance"].replaceAll(/[$,]/g, '');
        //Суммируем каждый баланс. Также умножаем на 100, для того чтобы избавиться от числа с плавающий точки (.65)
        sum = sum + stringToNumber * 100;
    }
    //Вывожу в консоль переменную (сумму балансов)
    return console.log(`${sum / 100}$`);
}
sumBalance(users);


//________Task-2______//
function pow (num, degree) {
    //Провожу сравнение степени с числом 1, если степень не равняется 1, тогда условие выполняется
    if (degree !== 1) {
        //Возвращаем число умноженное на результат функции
        return num * pow(num, degree - 1);
    }
    //Если степень равняется 1 тогда возвращаем просто число
    else {
        return num;
    }
}
console.log(pow(2,3));


// ________Task-3______//
function closures (number1) {
    //Выводим в консоль первое число
    console.log(`sum(${number1}) = ${number1}`);
    // Возвращаем функцию в которой задано второе число
    return function (number2) {
        //Создаем переменную, где прибавляем первое и второе число
        const result = number1 + number2
        //Выводим в консоль переменную, сумму двух первых чисел
        console.log(`sum(${number2}) = ${result}`);
        // Возвращаем функцию в которой задано третье число
        return function (number3) {
            //Создаем переменную, где прибавляем переменную result и третье число
            const resultTwo = result + number3;
            //Выводим в консоль переменную resultTwo
            console.log(`sum(${number3}) = ${resultTwo}`)
        }
    }
}
closures(3)(5)(20);

// ________Task-4______//

let ladder = {
    step: 0,
    up: function () {
        this.step++;
        return this;
    },
    down: function () {
        this.step--;
        return this;
    },
    showStep: function () {
        alert(this.step);
        return this;
    }
};
ladder.up().up().down().showStep();

