//______Пример 8______//
const seats = {

    '2023-02-17': {

        '09:00': {
            'freeSeats': [
                '1','4','8','9','10',
                '12','13','18','19','21',
                '24','25','33','48','50',
            ],
            'format': false,
            'food': true
        },
        '12:00': {
            'freeSeats': [
                '7','8','13','14','25',
                '26','37','48','49','51',
                '52','58','61','64','75',
            ],
            'format': true,
            'food': false
        },
        '15:00': {
            'freeSeats': [
                '11','21','31','41','50'
            ],
            'format': true,
            'food': true
        },
    },

    '2023-02-18': {

        '09:00': {
            'freeSeats': [
                '11','14','17','19','25',
                '26','27','28','39','40',
                '41','52','53','74','75',
            ],
            'format': true,
            'food': false
        },
        '12:00': {
            'freeSeats': [
                '41','43','48','49','50',
                '56','57','58','59','60'
            ],
            'format': false,
            'food': true
        },
        '15:00': {
            'freeSeats': [
                '1','2','3','4','5',
            ],
            'format': true,
            'food': true
        },
    },

    '2023-02-19': {

        '09:00': {
            'freeSeats': [
                '1','2','3','4','5',
                '6','7','8','9','10',
                '11','12','13','14','15',
            ],
            'format': false,
            'food': true
        },
        '12:00': {
            'freeSeats': [
                '21','22','23','24','55',
                '66','77','78','79','80',
                '81','82','83','84','85',
            ],
            'format': true,
            'food': false
        },
        '15:00': {
            'freeSeats': [
                '11','23'
            ],
            'format': true,
            'food': true
        },
    },
}

function checkTicketsAvailable(data, time,numOfSeats) {
    console.log('Выбираем билет...');
    return new  Promise((resolve, reject) => {
        setTimeout(() => {
            //Создаем переменную которая отвечает колличество свобоных мест на сеанс
            const setsAvailable = seats[data][time].freeSeats.length;
            //Проверяем что колличество свобоных мест на сеанс больше или равно колличеству билетов которые хочет забронировать зритель
            if (setsAvailable >= numOfSeats.length) {
                resolve(setsAvailable);
            } else {
                reject(`Мест на ${data} в ${time} нет`)
            }
        },2000);
    })
        .then(() => {
            console.log('Бронируем билеты...');
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    //Создаем переменную которая отвечает за проверку к примеру свободно ли место под номером 11 на данный сеанс
                    const checkFreeSeats = numOfSeats.every((el) => seats[data][time].freeSeats.includes(el))
                    if (checkFreeSeats === true) {
                        resolve(checkFreeSeats)
                    } else {
                        reject(`На ${data} в ${time} места ${numOfSeats} в наличие нет`)
                    }
                },1500);
            })
        })
        .then(() => {
            console.log('Проверяем можно ли в зал с едой...');
            return new Promise((resolve,reject) => {
                setTimeout(() => {
                    //Данная переменная отвечает за получения значения food(true or false) из объекта, для того чтобы в дальнейшем можно было с ним работать
                    const checkFood = seats[data][time].food;
                    if (checkFood === true) {
                        console.log(`Сеанс ${data} в ${time} с едой можно`);
                    } else if (typeof checkFood === 'number' || "undefined" || null || isNaN(checkFood)) {
                        reject(`Неверный тип данных, перепроверьте свои данные`)
                    } else {
                        console.log(`Сеанс ${data} в ${time} с едой к сожалению нельзя`);
                    }
                    resolve(checkFood);

                },3000);
            })
        })
        .then(() => {
            console.log('Выбираем формат фильма...');
            return new Promise((resolve,reject) => {
                setTimeout(() => {
                    //Данная переменная отвечает за получения значения format(true or false) из объекта, для того чтобы в дальнейшем можно было с ним работать
                    const checkFormat = seats[data][time].format
                    if (checkFormat === true) {
                        console.log(`Сеанс ${data} в ${time} будет в формате 3D`);
                    } else if (typeof checkFormat === 'number' || "undefined" || null || isNaN(checkFormat)) {
                        reject(`Неверный тип данных, перепроверьте свои данные`)
                    } else {
                         console.log(`Сеанс ${data} в ${time} будет в формате 2D`);
                    }
                    resolve(checkFormat);

                },4000);
            })
        })
}

async function bookTickets(data, time,numOfSeats) {
    try {
        const availableSeats = await checkTicketsAvailable(data, time,numOfSeats);
        console.log(`Вы забронировали на ${data}, ${numOfSeats.length} билетов на ${time}, ваши места ${numOfSeats}`)
    } catch (error) {
        console.log(error);
    } finally {
        console.log('Спасибо что выбрали наш кинотеатр !');
    }
}
bookTickets('2023-02-17','15:00',['11']);



























// function checkTicketsAvailable(data, time, numOfTicketBooked) {
//     console.log('Бронируем билеты');
//     return new  Promise((resolve, reject) => {
//         setTimeout(() => {
//             const setsAvailable = seats[data][time].freeSeats.length;
//             if (setsAvailable >= numOfTicketBooked) {
//                 resolve(setsAvailable);
//             } else {
//                 reject(`Мест на ${data} в ${time} нет`)
//             }
//         },2000);
//     })
// }
//
// function selectNumOfSeat(data,time,number) {
//     console.log('Выбираем билет...');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const checkFreeSeats = number.every((el) => seats[data][time].freeSeats.includes(el))
//             if (checkFreeSeats === true) {
//                 resolve(checkFreeSeats)
//             } else {
//                 reject(`На ${data} в ${time} места ${number} занято`)
//             }
//         },1500)
//     })
// }
//
//
// function checkFood(data,time,food) {
//
//     console.log('Проверяем можно ли в зал с едой...');
//
//     return new Promise((resolve, reject) => {
//
//         setTimeout(() => {
//             if (food === true) {
//                 resolve(food);
//             } else {
//                 reject(`На сеанс ${data} в ${time} с едой к сожалению нельзя`)
//             }
//         },3000)
//     })
// }
// function checkFormatOfFilm(data,time,format) {
//     console.log('Выбираем формат фильма...');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (format === true) {
//                 resolve(format)
//             } else {
//                 reject(`Сеанс на ${data} в ${time} будет в формате 2D`)
//             }
//
//         },4000)
//     })
// }
//
// async function resultSelectNumOfSeat (data,time,number) {
//     try {
//         const variableNumSeats = await selectNumOfSeat (data,time,number);
//         console.log(`На ${data} вы приобрели места под номером ${number} на ${time}`)
//     } catch (error) {
//         console.log(error)
//     }
//
// }
// async function bookTickets(data, time, numOfTicketBooked) {
//     try {
//         const availableSeats = await checkTicketsAvailable(data, time, numOfTicketBooked);
//         console.log(`${data} вы забронировали ${numOfTicketBooked} билета на ${time}`)
//     } catch (error) {
//         console.log(error)
//     }
// }
//
// async function resultFood(data,time,food) {
//     try {
//         const variableFood = await checkFood(data,time,food)
//         console.log(`На сеанс ${data} в ${time} с едой можно`)
//     } catch (error) {
//         console.log(error)
//     }
// }
// async function resultFormat(data,time,format) {
//     try {
//         const variableFormat = await checkFormatOfFilm(data,time,format);
//         console.log(`Cеанс ${data} в ${time} будет в формате 3D`)
//     } catch (error) {
//         console.log(error)
//     }
// }
// resultSelectNumOfSeat('2023-02-17','15:00',['11', '21','50']);
// bookTickets('2023-02-17','15:00',3);
// resultFood('2023-02-17','15:00',false);
// resultFormat('2023-02-17','15:00', false)




