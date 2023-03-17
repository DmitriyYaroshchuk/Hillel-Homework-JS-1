//   Task-1   //

const maxFirstTask = 30;
for (let i = 1; i <= maxFirstTask; i+= 0.5) {
    console.log(i)
    console.log('')
}


//   Task-2   //

const maxSecondTask = 100;
let sumSecondTask = 0;
for (let i = 10; i <= maxSecondTask; i+= 10) {
    sumSecondTask = i * 27;
    console.log(sumSecondTask);
}


// //   Task-3   //

const maxThirdTask = 100;
const numberThirdTask = 80;
for(let i = 1; i < maxThirdTask; i++) {
    if (i ** 2 <= numberThirdTask) {
        console.log(i)
    }
}


// //   Task-4   //

const numberFourthTask = 13; // 2,3,5,7 - Простые
let condition = 0;
for (let i = 2; i < numberFourthTask; i++) {
    if (numberFourthTask % i === 0){
        console.log ('Число составное!');
        condition = 1;
        break;
    }
}
if (numberFourthTask === 1) {
    console.log('1 Является не простым и не составным числом');
} else if (condition === 0) {
        console.log('Является простым')
}


// //   Task-5   //

const  numberFifthTask = 27;
let conditionFifthTask = 0;
for (let i = 1; i < numberFifthTask; i++) {
    if (3 ** i === numberFifthTask) {
        console.log('Можно получить')
        conditionFifthTask = 1;
    }
}
if (conditionFifthTask === 0) {
    console.log('Нельзя получить')
}