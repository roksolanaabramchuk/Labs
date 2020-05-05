'use strict'
// Variant №2
console.log('Lab_1', '\n')
let Zavd_1 = require('./Zavd_1.js')
let Zavd_2 = require('./Zavd_2.js')
let Zavd_3 = require('./Zavd_3.js')
let Zavd_4 = require('./Zavd_4.js')
let Zavd_5 = require('./Zavd_5.js')

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