const dateOfBirthday = prompt('What year were you born ?');
const placeOfResidence = prompt('Where do you live ?','Morocco');
const kindOfSport = prompt('What is your favorite sport ?','boxing or swimming or motorsport');

const resultOfBirthday = 2022 - Number(dateOfBirthday);

const isKyiv = placeOfResidence === 'Kyiv';
const isWashington = placeOfResidence === 'Washington';
const isLondon = placeOfResidence === 'London';

const messageForUkraineBoxing = `
    ${resultOfBirthday}
    You live in the capital of Ukraine
    Cool! Do you want to become Alexander Usik ?`

const messageForUkraineSwimming = `
    ${resultOfBirthday}
    You live in the capital of Ukraine
    Cool! Do you want to become Alexander Zheltyakov ?`

const messageForUkraineMotorsport = `
    ${resultOfBirthday}
    You live in the capital of Ukraine
    Cool! Do you want to become Oleksiy Mochanov ?`

const messageForWashingtonBoxing = `
    ${resultOfBirthday}
    You live in the capital of USA
    Cool! Do you want to become Alexander Usik ?`

const messageForWashingtonSwimming = `
    ${resultOfBirthday}
    You live in the capital of USA
    Cool! Do you want to become Alexander Zheltyakov ?`

const messageForWashingtonMotorsport = `
    ${resultOfBirthday}
    You live in the capital of USA
    Cool! Do you want to become Oleksiy Mochanov ?`

const messageForLondonBoxing = `
    ${resultOfBirthday}
    You live in the capital of Great Britain
    Cool! Do you want to become Alexander Usik ?`

const messageForLondonSwimming = `
    ${resultOfBirthday}
    You live in the capital of Great Britain
    Cool! Do you want to become Alexander Zheltyakov ?`

const messageForLondonMotorsport = `
    ${resultOfBirthday}
    You live in the capital of Great Britain
    Cool! Do you want to become Oleksiy Mochanov ?`


if (
    isKyiv
    && kindOfSport === 'boxing') {
    alert(`${messageForUkraineBoxing}`)


} else if (
    isKyiv
    && kindOfSport === 'swimming') {
    alert(`${messageForUkraineSwimming}`)


} else if (
    isKyiv
    && kindOfSport === 'motorsport') {
    alert(`${messageForUkraineMotorsport}`)


} else if (
    isWashington
    && kindOfSport === 'boxing') {
    alert(`${messageForWashingtonBoxing}`)


}  else if (
    isWashington
    && kindOfSport === 'swimming') {
    alert(`${messageForWashingtonSwimming}`)


} else if (
    isWashington
    && kindOfSport === 'motorsport') {
    alert(`${messageForWashingtonMotorsport}`)


} else if (
    isLondon
    && kindOfSport === 'boxing') {
    alert(`${messageForLondonBoxing}`)


} else if (
    isLondon
    && kindOfSport === 'swimming') {
    alert(`${messageForLondonSwimming}`)


} else if (
    isLondon
    && kindOfSport === 'motorsport') {
    alert(`${messageForLondonMotorsport}`)


} else if (
    resultOfBirthday !== 2022
    && placeOfResidence !== null
    && placeOfResidence === placeOfResidence
    && kindOfSport === 'boxing') {
    alert(`
    ${resultOfBirthday}
    You live in the city of ${placeOfResidence}.
    Cool! Do you want to become Alexander Usik ?`)

} else if (
    resultOfBirthday !== 2022
    && placeOfResidence !== null
    && placeOfResidence === placeOfResidence
    && kindOfSport === 'swimming') {
    alert(`
    ${resultOfBirthday}
    You live in the city of ${placeOfResidence}.
    Cool! Do you want to become Alexander Zheltyakov ?`)

} else if (
    resultOfBirthday !== 2022
    && placeOfResidence !== null
    && placeOfResidence === placeOfResidence
    && kindOfSport === 'motorsport') {
    alert(`
    ${resultOfBirthday}
    You live in the city of ${placeOfResidence}.
    Cool! Do you want to become Oleksiy Mochanov ?`)

} else if(
    dateOfBirthday === null) {
    alert('It is a pity that you did not want to enter your date of birth')

} else if (
    placeOfResidence === null) {
    alert('It is a pity that you did not want to enter your place of residence')

} else if (
    kindOfSport === null) {
    alert('It is a pity that you did not want to enter your kind of sport')
}
