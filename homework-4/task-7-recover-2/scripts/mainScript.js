const yearOfBirth = +prompt('Enter your year of birth');
const place = prompt('What city do you live in ?');
const sport = prompt('What is your favorite sport ?');

const calculation = 2022 - yearOfBirth;
let messageYear;
let messagePlace;
let messageSport;


//_____Year of birth_____//

switch (yearOfBirth) {

    case 0 :
    case null : {
        messageYear = "It is a pity that you didn't want to enter the year of birth!"
    }
    break;
    case NaN: {
        messageYear = "You entered an invalid year of birth";
    }
    break;
    default : {
        messageYear = `You are ${calculation} years old!`
    }
}



//_____Place_____//

switch (place) {

    case 'Kyiv' : {
        messagePlace = "You live in the capital of Ukraine!"
    }
    break;
    case 'Washington' : {
        messagePlace = "You live in the capital of USA!"
    }
    break;
    case 'London' : {
        messagePlace = "You live in the capital of Great Britain!"
    }
    break;
    case '' :
    case null : {
        messagePlace = "It is a pity that you didn't want to enter the city!"
    }
        break;
    default : {
        messagePlace = `You live in ${place}!`
    }
}


//_____Sport_____//

switch (sport) {

    case 'Boxing' : {
        messageSport = "Cool! Do you want to become Alexander Usik ?"
    }
    break;
    case 'Swimming' : {
        messageSport = "Cool! Do you want to become Alexander Zheltyakov ?"
    }
    break;
    case 'Motorsport' : {
        messageSport = "Cool! Do you want to become Michael Schumacher ?"
    }
    break;
    case '' :
    case null : {
        messageSport = "It is a pity that you didn't want to enter the kind of sport!"
    }
    break;
    default : {
        messageSport = `Your sport is ${sport}!`
    }

}
alert(`
${messageYear}
${messagePlace}
${messageSport}`)