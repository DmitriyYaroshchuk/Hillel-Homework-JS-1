const { calculate } = require('./mainScripts');
const { expect } = require("expect");

//_____Тестируем экземпляр класса calculate_____//
describe('Тестируем экземпляр класса', () => {

    //_____getAge_____//
    test('Проверка на типы данных функции getAge', () => {
        expect(calculate.getAge()).toBeTruthy()
        expect(typeof calculate.getAge()).toBe('string')
    })

    test('Выводит ли имя и год рождения', () => {
        expect(calculate.getAge()).toBe(`Dmitriy Yaroshchuk's old is 22 years`)
    })

    //_____averageMark_____//
    test('Проверка на типы данных функции averageMark', () => {
        expect(calculate.averageMark()).toBeTruthy()
        expect(typeof calculate.averageMark()).toBe('string')
    })

    test('Выводит ли среднюю оценку', () => {
        expect(calculate.averageMark()).toBe(`Dmitriy Yaroshchuk's average mark is 91.4`)
    })

    //_____present_____//
    test('Проверка на типы данных функции present', () => {
        expect(calculate.move(true)).toBeTruthy();
        expect(typeof calculate.move(true)).toBe('object')

    })

    //_____absent_____//
    test('Проверка на типы данных функции absent', () => {
        expect(calculate.move(false)).toBeTruthy();
        expect(typeof calculate.move(false)).toBe('object')

    })

    //_____summary_____//
    test('Проверка на типы данных функции summary', () => {
        expect(calculate.summary()).toBeTruthy()
        expect(typeof calculate.summary()).toBe('string')
    })

    test('Выводит ли Cool!', () => {
        expect(calculate.summary()).toEqual(`Cool!`)
    })
})