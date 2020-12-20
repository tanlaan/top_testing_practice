const reverseString = (word) => {
    let newWord = ''
    for(let i = word.length; i >= 0; i--) {
        newWord += word.charAt(i)
    }
    return(newWord)
}

export default reverseString