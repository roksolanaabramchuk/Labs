//Написати реалізацію сортування масиву об’єктів User за значенням поля name

function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1
}
module.exports.sortUsers = function(users) {
    return users.sort(byField('name'))
}