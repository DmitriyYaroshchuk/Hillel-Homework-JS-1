//________Task-1_______//
const testObject = {
    name: 'Dmitriy',
    age: 99,
    location: 'Monaco'
}
const testObject1 = {
    name: 'Dmitriy'
}
const testObject2 = {};
function isEmpty (object) {
    //Создаем цикл для перебора объекта
    for (let key in object) {
        //Создаем переменную которая владеет ключами и значениями объекта
        const meaning = Object.entries(object);
        //Провожу сравнение переменной с числом 2, что количество ключей должно быть 2 или больше, тогда условие выполняется
        if (meaning.length >= 2) {
            // Возвращает в консоль текст если выполнилось условие выше
            return console.log('object is full of properties');
        }
        //Провожу сравнение переменной с числом 1, что количество ключей должно быть ровно 1, тогда условие выполняется
        else if (meaning.length === 1) {
            // Возвращает в консоль текст если выполнилось условие выше
            return console.log('object has one property');
        }
    }
    // Если не выполнилось ни одно условие выше тогда объект является пустым и выводит в консоль данный текст
    return console.log('object is empty');
}
//Выводит заполненный объект
isEmpty(testObject);
//Выводит объект который, имеет только одно свойство
isEmpty(testObject1);
//Выводит пустой объект
isEmpty(testObject2);


//_______Task-2_______//

const filters = {
    age: function (a) {
        return a >= 25;
    },
    education: function (a) {
        return a === 'higher';
    },
    experience: function (a) {
        return a >= 1;
    }
    // age:       (a) => a >= 25,
    // education: (a) => a === 'higher',
    // experience:(a) => a >= 1,
};
const employee = {};
const defaultDescriptors = {
    writable: true,
    enumerable: true,
    configurable: true
};
Object.defineProperties(employee, {
    name: {
        ...defaultDescriptors,
        value: 'Dmitriy',
        writable: false
    },
    age: {
        ...defaultDescriptors,
        value: 21
    },
    education: {
        ...defaultDescriptors,
        value: 'middle'
    },
    experience: {
        ...defaultDescriptors,
        value: 0
    }
})
function hireNewEmployee (employee,filters) {
    const reasons = [];
    let lieCounter = 0;
    function lieToEmployer (employee) {
        Object.defineProperties(employee, {
            age: {
                value: 27
            },
            education: {
                value: 'higher'
            },
            experience: {
                value: 7
            }
        });
        function checkEmployee (employee) {
            if (employee.age >= 25
                && employee.education === 'higher'
                && employee.experience >= 1
                && lieCounter < 1) {
                lieCounter++;
                return lieToEmployer(employee);
            }
            else {
                return false;
            }
        }
        checkEmployee(employee);
    }
    lieToEmployer(employee);
    Object.entries(filters).forEach(([name,func]) => {
        if (func(employee[name]) === false) {
            reasons.push(name);
        }
    });
    return reasons.length
        ? `Not hired: sorry we cannot hire you. Here is why: ${reasons.join(', ')}`
        : 'You are Hired! Congrats!';
}
console.log(hireNewEmployee(employee,filters));