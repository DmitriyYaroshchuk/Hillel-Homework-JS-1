//________Task-1________//
const arrayOfObjects = [
    {
        student: 'Dmitriy',
        runLab () {
            return 1;
        }
    },
    {
        student: 'Andrew',
        runLab () {
            return 2;
        }
    },
    {
        student: 'Mellisa',
        runLab () {
            return 3;
        }
    },
    {
        student: 'Ann',
        runLaboratory () {
            return 4;
        }
    },
];
function gradeLabs(array,expectedResult) {
    array.forEach((element) => {
        const student = element.student;
        const resultLab = element.runLab();
        try {
            if (resultLab === expectedResult) {
                return console.log(`Student has PASSED the test, ${student}`);
            }
            else {
                throw TypeError(`Student has FAILED the test, ${student}`);
            }
        } catch (e) {
            console.error(`Student: has FAILED the test. Error thrown: ${student} ${e}`);
        }
    });
}
gradeLabs(arrayOfObjects,1);



//________Task-2________//
const objectOfAnimals = {
    0: 'zebra',
    1: 'lion',
    2: 'giraffe',
    3: 'skunk',
    4: 'lama',
    5: 'dog',
    6: 'cat'
}
function funcOfAnimals (id) {
    try {
        if (objectOfAnimals[id]) {
            return console.log(objectOfAnimals[id]);
        }
        else {
            throw TypeError('Не найден id!');
        }
    } catch (e) {
        console.error(e);
        console.log('Данного id не существует, введи от 0 до 6');
    }
}
funcOfAnimals(22);
