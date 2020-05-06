'use strict'
// Variant №2
console.log('Lab_1', '\n')
let Zavd_1 = require('./Zavd_1.js')
let Zavd_2 = require('./Zavd_2.js')
let Zavd_3 = require('./Zavd_3.js')
let Zavd_4 = require('./Zavd_4.js')
let Zavd_5 = require('./Zavd_5.js')
let Zavd_6 = require('./Zavd_6.js')
let PortClass = require('./Port.js')
let ShipClass = require('./Ship.js')


// Zavd 1
console.log('Zavd 1: Реалізувати розбиття стрічки на слова у масив')
let stringToSplit = 'Hello world my name is Roksolana'
console.log(Zavd_1.stringToSplit(stringToSplit))
console.log('\n')

// Zavd 2
console.log('Zavd 2: Написати функцію, яка посортує слово у алфавітному порядку')
let word = 'Mathemaics'
console.log('Слово для сортування: ', '\n', word)
console.log('Посортоване слово: ')
console.log(Zavd_2.wordSortToAlphabeticalOrder(word))
console.log('\n')

// Zavd 3
console.log('Zavd 3: Написати функцію, яка найбільший спільний дільник двох додатних чисел')
var numb1 = 65
var numb2 = 15
console.log('НСД чисел ', numb1, 'і', numb2, ':', Zavd_3.gettingNSDnumbers(numb1, numb2))
console.log('\n')

// Zavd 4
console.log('Zavd 4: Написати функцію, яка перемішає масив випадковим чином')
var arr = [2, 11, 37, 42, 4, 32, 19, 121]
console.log('Масив до перемішування: ', arr)
console.log('Масив після перемішування: ', Zavd_4.arrayShuffling(arr))

// Zavd 5
console.log('Zavd 5: Написати функцію, яка поверне кількість днів для заданого місяця та року')
var year = 2020
var month = 6
console.log(' Кількість днів у ', month, 'місяці', year, 'року: ', Zavd_5.gettingDayCount(year, month))

// Zavd 6
console.log('Zavd 6: Написати реалізацію сортування масиву об’єктів User за значенням поля name')
var users = [{ name: 'Roksolana' }, { name: 'Ann' }, { name: 'Olena' }, { name: 'Bogdan' }, { name: 'Ivan' }]
console.log(Zavd_6.sortUsers(users))

// Zavd 7
console.log('Zavd 7:')
var port1 = new PortClass.Port(1, 'SAND', 1)
var port2 = new PortClass.Port(1, 'SEA', 1)
var port3 = new PortClass.Port(55, 'DFF', 4)
var ship1 = new ShipClass.Ship(3, 'Ship!', 1)
var ship2 = new ShipClass.Ship(66, 'DLF', 4)
var ship3 = new ShipClass.Ship(13, 'Team', 1)

// Додавання нового порту в колекцію
port1.AddPort()
port2.AddPort()
port3.AddPort()
new PortClass.Port(4, 'HKL', 4).AddPort()
console.log(PortClass.PortCollection)

// Редагування порту в колекції
port1.EditingPort(1, 'SAND', 3)
console.log(PortClass.PortCollection)

// Видалення порту з колекції
//port1.DeletePort()
//console.log(PortClass.PortCollection)

// Пошук одного порту в колекції
console.log(PortClass.Port.SearchPort(4))

// Додавання корабля в колекцію
ship1.AddShip()
ship2.AddShip()
ship3.AddShip()
console.log(ShipClass.ShipCollection)

// Редагування корабля в колекції
ship1.EditingShip(1, 'Ship!', 2)
console.log(ShipClass.ShipCollection)

// Видалення корабля з колекції
//ship2.DeleteShip()

//Пошук одного корабля в колекції
console.log(ShipClass.Ship.SearchShip(1))