module.exports.stringToSplit = function(text) {
    return text.split(' ').filter(word => word.length > 1)
}