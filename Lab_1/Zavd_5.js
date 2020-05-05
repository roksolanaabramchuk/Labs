// Написати функцію, яка поверне кількість днів для заданого місяця та року
// module.exports.gettingDayCount = function(year, month) {
//     return 33 - new Date(year, month, 33).getDate()
// }
module.exports.gettingDayCount = (year, month) => {
    let days = new Date(year, month, 0).getDate()
    return days
}