//   Task-1   //

const maxFirstTask = 20;
const array = [];
for (let i = 10; i <= maxFirstTask; i++) {
    array.push(i);
}
console.log(array.join());

// const maxFirstTask = 20;
// for (let i = 10; i <= maxFirstTask; i++) {
//     if (i <= maxFirstTask - 1) {
//         console.log(i + ',')
//     }
//     else {
//         console.log(i + '')
//     }
// }


//   Task-2   //

const maxSecondTask = 20;
let square;
for (let i = 10; i <= maxSecondTask; i++) {
    square = i * i
    console.log(square)
}


// //   Task-3   //

const numberThirdTask = 7;
for (let i = 1; i <= 10; i++) {
    console.log(`${i} * ${numberThirdTask} = ${i * numberThirdTask}`)
}


// //   Task-4   //

const maxFourthTask = 15;
let sumFourthTask = 0;
for (let i = 1; i <= maxFourthTask; i++) {
    sumFourthTask = sumFourthTask + i;
}
console.log(sumFourthTask);


// //   Task-5   //

const maxFifthTask = 35;
let multiple = 1;
for(let i = 15; i <= maxFifthTask; i++) {
    multiple = multiple * i;
}
console.log(multiple);


// //   Task-6   //

const maxSixthTask = 500;
let sumSixthTask = 0;
for (let i = 1; i <= maxSixthTask; i++) {
    sumSixthTask = sumSixthTask + i;
}
console.log(sumSixthTask / 500);


// //   Task-7   //

const maxSeventhTask = 80;
let sumSeventhTask = 0;
for (let i = 30; i <= maxSeventhTask; i++) {
    if (i % 2 !== 0) {
        continue
    }
    sumSeventhTask = sumSeventhTask + i;
}
console.log(sumSeventhTask);


// //   Task-8   //

const maxEighthTask = 200;
for (let i = 100; i <= maxEighthTask; i++) {
    if (i % 3 === 0) {
        console.log(i)
    }
}


// //   Task-9   //

const numberNinthTask = 6;
for (let i = 1; i <= numberNinthTask; i++) {
    if (numberNinthTask % i === 0) {
        console.log(i)
    }
}


// //   Task-10   //

const numberTenthTask = 6;
let countTenthTask = 0;
for (let i = 1; i <= numberTenthTask; i++) {
    if (numberTenthTask % i === 0 && i % 2 === 0) {
        countTenthTask++;
    }
}
console.log(countTenthTask);


// //   Task-11   //

const numberEleventhTask = 6;
let sumEleventhTask = 0;
for (let i = 1; i <= numberEleventhTask; i++) {
    if (numberEleventhTask % i === 0 && i % 2 === 0) {
        sumEleventhTask = sumEleventhTask + i;
    }
}
console.log(sumEleventhTask)


// //   Task-12   //

const numberTwelfthTask = 10;
for (let i = 1; i <= numberTwelfthTask; i++) {
    for (let j = 1; j <= numberTwelfthTask; j++) {
        console.log(`${i} * ${j} = ${i * j}`)
    }
}
