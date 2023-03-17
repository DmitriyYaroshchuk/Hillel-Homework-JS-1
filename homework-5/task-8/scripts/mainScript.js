// let numOrStr = prompt('input number or string');
// console.log(numOrStr)
//
// if(numOrStr === null) {
//     console.log('ви скасували')
// } else if( numOrStr.trim() === '' ) {
//     console.log('Empty String');
// } else if ( isNaN( +numOrStr ) ) {
//     console.log(' number is Ba_NaN')
// } else {
//     console.log('OK!')
// }
let numOrStr = prompt('input number or string');
console.log(numOrStr)

switch (true) {
    case numOrStr === null : {  // numOrStr === null —— получаем true; true === (true) switch  —— сравниваем полученное true из case  c (true) switch
        console.log('ви скасували')
        break;
    }
    case numOrStr.trim() === '' : {  // numOrStr.trim() === '' —— получаем true; true === (true) switch  —— сравниваем полученное true из case  c (true) switch
        console.log('Empty String');
        break;
    }
    case  isNaN ( +numOrStr ): {  // isNaN ( +numOrStr ) —— получаем true; true === (true) switch  —— сравниваем полученное true из case  c (true) switch
        console.log(' number is Ba_NaN')
        break;
    }
    default : {
        console.log('OK!')
    }
}
