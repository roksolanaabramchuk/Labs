//Реалізувати розбиття стрічки на слова у масив

module.exports.stringToSplit = function(text) {
    return text.split(' ').filter(word => word.length > 0)
}