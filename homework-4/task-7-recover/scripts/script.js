const yearOfBirthday = prompt('Введите ваш год рождения');
const place = prompt('В каком городе вы проживаете ?');
const sport = prompt('Какой ваш любимый вид спорта ?');


switch (true) {
    
    //_____Незапалненое поле_____//

    case yearOfBirthday === null
        && place === null
        && sport === null: {
        alert(`Жаль что вы не захотели вводить год рождения`)
        alert(`Жаль что вы не захотели вводить место проживания `)
        alert(`Жаль что вы не захотели вводить вид спорта `)
    }
        break;

    case yearOfBirthday === null
        && place === null: {
        alert(`Жаль что вы не захотели вводить год рождения`)
        alert(`Жаль что вы не захотели вводить место проживания `)
    }
        break;

    case place === null
        && sport === null : {
        alert(`Жаль что вы не захотели вводить место проживания `)
        alert(`Жаль что вы не захотели вводить вид спорта `)
    }
        break;

    case yearOfBirthday === null
        && sport === null : {
        alert(`Жаль что вы не захотели вводить год рождения`)
        alert(`Жаль что вы не захотели вводить вид спорта `)
    }
        break;

    case yearOfBirthday === null : {
        alert(`Жаль что вы не захотели вводить год рождения`)
    }
        break;

    case place === null: {
        alert(`Жаль что вы не захотели вводить место проживания `)
    }
        break;

    case sport === null: {
        alert(`Жаль что вы не захотели вводить вид спорта `)
    }
        break;




    //_____Киев_____//

    case place === 'Киев'
        && sport === 'Бокс': {
        alert(`
        ${2022 - Number(yearOfBirthday)}
        Ты живешь в столице Украины
        Круто! Хочешь стать как Александр Усик ?
        `)
    }
        break;

    case place === 'Киев'
    && sport === 'Плаванье': {
        alert(`
        ${2022 - Number(yearOfBirthday)}
        Ты живешь в столице Украины
        Круто! Хочешь стать как Александр Желтяков ?
        `)
    }
        break;
    case place === 'Киев'
    && sport === 'Автоспорт': {
        alert(`
        ${2022 - Number(yearOfBirthday)}
        Ты живешь в столице Украины
        Круто! Хочешь стать как Михаил Шумахер ?
        `)
    }
        break;
    case place === 'Киев': {
        alert(`
        ${2022 - Number(yearOfBirthday)}
        Ты живешь в столице Украины
        ${sport}
        `)
    }
        break;





    //_____Вашингтон_____//

    case place === 'Вашингтон'
    && sport === 'Бокс': {
        alert(`
        ${2022 - Number(yearOfBirthday)}
        Ты живешь в столице Соединеных Штатов Америке
        Круто! Хочешь стать как Александр Усик ?
        `)
    }
        break;
    case place === 'Вашингтон'
    && sport === 'Плаванье': {
        alert(`
        ${2022 - Number(yearOfBirthday)}
        Ты живешь в столице Соединеных Штатов Америке
        Круто! Хочешь стать как Александр Желтяков ?
        `)
    }
        break;
    case place === 'Вашингтон'
    && sport === 'Автоспорт': {
        alert(`
        ${2022 - Number(yearOfBirthday)}
        Ты живешь в столице Соединеных Штатов Америке
        Круто! Хочешь стать как Михаил Шумахер ?
        `)
    }
        break;
    case place === 'Вашингтон': {
        alert(`
        ${2022 - Number(yearOfBirthday)}
        Ты живешь в столице Соединеных Штатов Америке
        ${sport}
        `)
    }
        break;



    //_____Лондон_____//

    case place === 'Лондон'
    && sport === 'Бокс': {
        alert(`
        ${2022 - Number(yearOfBirthday)}
        Ты живешь в столице Великобритании
        Круто! Хочешь стать как Александр Усик ?
        `)
    }
        break;
    case place === 'Лондон'
    && sport === 'Плаванье': {
        alert(`
        ${2022 - Number(yearOfBirthday)}
        Ты живешь в столице Великобритании
        Круто! Хочешь стать как Александр Желтяков ?
        `)
    }
        break;
    case place === 'Лондон'
    && sport === 'Автоспорт': {
        alert(`
        ${2022 - Number(yearOfBirthday)}
        Ты живешь в столице Великобритании
        Круто! Хочешь стать как Михаил Шумахер ?
        `)
    }
        break;
    case place === 'Лондон': {
        alert(`
        ${2022 - Number(yearOfBirthday)}
        Ты живешь в столице Великобритании
        ${sport}
        `)
    }
        break;



    //_____Другой город_____//

    case sport === 'Бокс': {
        alert(`
        ${2022 - Number(yearOfBirthday)}
        Ты живешь в городе ${place}
        Круто! Хочешь стать как Александр Усик ?
        `)
    }
        break;
    case sport === 'Плаванье': {
        alert(`
        ${2022 - Number(yearOfBirthday)}
        Ты живешь в городе ${place}
        Круто! Хочешь стать как Александр Желтяков ?
        `)
    }
        break;
    case sport === 'Автоспорт': {
        alert(`
        ${2022 - Number(yearOfBirthday)}
        Ты живешь в городе ${place}
        Круто! Хочешь стать как Михаил Шумахер ?
        `)
    }
        break;




    //_____Другой город и спорт_____//

    case place === place
        || sport === sport : {
        alert(`
        ${2022 - Number(yearOfBirthday)}
        Ты живешь в городе ${place}
        ${sport}
        `)
    }
        break;


    default: {
        alert(`
        Error
        Error
        Error`)
    }
}