//________Task-1________//
class Student {
    constructor(firstName,lastName,yearOfBirth,arrayOfGrades) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearOfBirth = yearOfBirth;
        this.arrayOfGrades = arrayOfGrades;
        this.age = new Date().getFullYear() - this.yearOfBirth;
        this.avgMark = arrayOfGrades.reduce((sum,item) => {
            return sum += item
        }, 0) / arrayOfGrades.length;

    }
    //______Возраст студента______//
    getAge () {
        const currentYear = new Date().getFullYear();
        try {
            if (this.yearOfBirth < 1900 || this.yearOfBirth >= currentYear) {
                throw new Error('Год рождения студента указан неверно')
            } else {
                return (`${this.firstName} ${this.lastName}'s old is ${this.age} years`);
            }
        } catch (error) {
            console.error(`Исправьте год рождения ${this.firstName} ${this.lastName} ${error}`)
        }
    }
    //______Средний бал______//
    averageMark () {
        try {
            if (this.avgMark > 100 || this.avgMark < 0) {
                throw new Error('Оценка расчитана неверно')
            } else {
                return(`${this.firstName} ${this.lastName}'s average mark is ${this.avgMark}`);
            }
        } catch (error) {
            console.log(`Проверьте правильность ввода данных ${this.firstName} ${this.lastName} ${error}`)
        }
    }
}

class Visit extends Student {
    constructor(firstName, lastName, yearOfBirth, arrayOfGrades) {
        super(firstName, lastName, yearOfBirth, arrayOfGrades);
        this.visitinMagazine = [];
    }

    //______Используется когда студент был или не был на занятие______//
    move (whatDo) {
        try {
            this.visitinMagazine.push(whatDo);
            if (this.visitinMagazine.length <= 25) {
                return this
            } else {
                throw new Error(whatDo ? 'Много посещений' : 'Много пропусков');
            }
        } catch (error) {
            this.visitinMagazine.pop();
            console.error(`${error} Обучение для ${this.firstName} ${this.lastName} Happy End`);
            return this;
        }
    }
}
 class Calculation extends Visit {
    constructor(firstName, lastName, yearsOfBirth, arrayOfGrades) {
        super(firstName, lastName, yearsOfBirth, arrayOfGrades);
    }

     //______Проверяем среднюю оценку и посейщение______//
     summary () {
         const averageVisit = this.visitinMagazine.filter((element) => element === true).length / this.visitinMagazine.length;
         if (this.avgMark > 90 && averageVisit > 0.9) {
             return 'Cool!';
         } else if (this.avgMark > 90 || averageVisit > 0.9) {
            return 'Good, but it can be better!';
         } else {
             return 'Radish';
         }
     }
 }
//______Экземпляры расчетов______//
const calculate = new Calculation('Dmitriy', 'Yaroshchuk', 2001, [70, 80, 90, 100, 90, 90, 99, 100, 95, 100]);
const calculate1 = new Calculation('Andrew', 'Kavetsky', 2000, [90, 90, 90, 90, 90, 90, 100, 100, 95, 93]);
const calculate2 = new Calculation('Diana', 'Koko', 1999, [70, 70, 70, 70, 70, 70, 75, 75, 75, 93]);

console.log(calculate.getAge());
console.log(calculate1.getAge());
console.log(calculate2.getAge());

console.log(calculate.averageMark());
console.log(calculate1.averageMark());
console.log(calculate2.averageMark());


//______Посейщение уроков______//
calculate.move(true).move(true).move(true).move(true).move(true).move(true).move(true).move(true).move(true).move(true).move(true).move(true).move(true).move(true).move(true).move(true).move(true).move(true).move(true).move(true).move(true).move(true).move(true).move(false).move(true);

//______Посейщение уроков______//
calculate1.move(false).move(false).move(false).move(false).move(false).move(false).move(false).move(false).move(false).move(false).move(false).move(false).move(false).move(false).move(false).move(false).move(false).move(false).move(false).move(false).move(false).move(false).move(false).move(true).move(true);

//______Посейщение уроков______//
calculate2.move(true).move(true).move(true).move(true).move(true).move(true).move(true).move(true).move(true).move(true).move(true).move(true).move(true).move(true).move(true).move(true).move(true).move(true).move(true).move(true).move(false).move(false).move(false).move(false).move(false);

console.log(calculate.visitinMagazine);
console.log(calculate1.visitinMagazine);
console.log(calculate2.visitinMagazine);

console.log(calculate.summary());
console.log(calculate1.summary());
console.log(calculate2.summary());


if (typeof module === 'object') {
    module.exports = { Calculation: Calculation, calculate: calculate }
}




