function reverseString(word) {
    let newWord = ''
    for(let i = word.length; i >= 0; i--) {
        newWord += word.charAt(i)
    }
    return(newWord)
}

module.exports = reverseString