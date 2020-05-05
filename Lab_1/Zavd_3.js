// Написати функцію, яка найбільший спільний дільник двох додатних чисел

let gettingNSDnumbers = function(number1, number2) {
    if (number2 > number1) return gettingNSDnumbers(number2, number1)
    if (!number2) return number1
    return gettingNSDnumbers(number2, number1 % number2)
}
module.exports = { gettingNSDnumbers }