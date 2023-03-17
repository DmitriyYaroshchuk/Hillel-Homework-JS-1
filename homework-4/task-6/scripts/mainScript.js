const operation = prompt('Enter operation type', 'add or subtract or multiply or divide');
const firstNumber = +prompt('Enter first number');
const secondNumber = +prompt('Enter second number');

let result;

switch (operation) {
    case 'add': {

        result = firstNumber + secondNumber

        alert(`${firstNumber} + ${secondNumber} = ${result}`)

        break;
    }
    case 'subtract': {

        result = firstNumber - secondNumber

        alert(`${firstNumber} - ${secondNumber} = ${result}`)

        break;
    }
    case 'multiply': {

        result = firstNumber * secondNumber

        alert(`${firstNumber} * ${secondNumber} = ${result}`)

        break;
    }
    case 'divide': {

        result = firstNumber / secondNumber

        alert(`${firstNumber} / ${secondNumber} = ${result}`)

        break;
    }
    default: {
        alert('Wrong operation')
    }
}

