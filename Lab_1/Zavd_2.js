// Написати функцію, яка посортує слово у алфавітному порядку

function case_insensitive_comp(strA, strB) {
    return strA.toLowerCase().localeCompare(strB.toLowerCase())
}
module.exports.wordSortToAlphabeticalOrder = function(word) {
    word = word.split("")
    return word.sort(case_insensitive_comp)
}