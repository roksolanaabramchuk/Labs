// Написати функцію, яка поверне кількість днів для заданого місяця та року
module.exports.Date.gettingDayCount = function(year, month) {
    return 32 - new Date(year, month, 32).getDate()
}