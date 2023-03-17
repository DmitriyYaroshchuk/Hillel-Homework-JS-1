// //_____Task-1_____//

const arrayDuplicate = ['a','b','c','d','a','b','c','j','g'];
function funcDeleteDuplicate (array) {
   return array.filter((element, index) => array.indexOf(element) === index);
}
console.log(funcDeleteDuplicate(arrayDuplicate));





// //_____Task-2_____//

const firstArrayTwo = [1, 2, 3, 4, 5];
const secondArrayTwo = [11, 12, 13, 14, 15];
function functionTwo (elementATwo,elementBTwo) {
   if (elementATwo.length !== elementBTwo.length) { // Сравнение длины массива
      return false;
   }
   for (let i = 0; i < firstArrayTwo.length; i++) { //Цикл по всем элементам
      if (elementATwo[i] !== elementBTwo[i]) {
         return false;
      }
   }
   return true;
}
console.log('Являются ли данные массивы идентичными ?',functionTwo(firstArrayTwo,secondArrayTwo));

//_____Task-3_____//

const arrayThree = ['Andrew','Dmitriy','Maksim','German','Dasha','Anastasia'];
const letter = 'A';
function functionFiltersItems (elementArray,elementLetter) {
   return elementArray.filter((element) => element.startsWith(elementLetter));
}
console.log(functionFiltersItems(arrayThree,letter));

// const arrayThree = ['Andrew','Dmitriy','Maksim','German','Dasha','Anastasia'];
// function functionFiltersItems (elementArrayThree) {
//    return elementArrayThree.filter((element) => element.startsWith('A'));
// }
// console.log(functionFiltersItems(arrayThree));

// const arrayThree = ['Andrew','Dmitriy','Maksim','German','Dasha','Anastasia'];
// const letter = 'A';
// let array = [];
// function funcSearch (elementArray,elementLetter) {
//    for (let i = 0; i < elementArray.length; i++) {
//       if (elementArray[i].startsWith(elementLetter)) {
//          array.push(elementArray[i] + '');
//       }
//    }
//    return array
// }
// console.log(funcSearch(arrayThree,letter));


//_____Task-4_____//

const arrayOfSentences = ['Hello world !','Hello, how are you ?','I can not play the games','I do not invite him'];
const word = 'not';

function functionSearchOfWord (elementArray,elementWord) {
   return elementArray.filter((element) => element.includes(elementWord));
}
console.log(functionSearchOfWord(arrayOfSentences,word));

 