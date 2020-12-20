const caesar = (words, offset) => {
    let converted = ''
    for (let i = 0; i < words.length; i += 1) {
        // Get character
        let character = words.charAt(i)
        // If character alphanumeric lowercase
        if (isAlphaLower(character)) {
            // Check if adding the offset will go out of bounds
            if (!isAlphaLower(offsetChar(character, offset))) {
                // We went out of bounds, roll over
                if (isPositive(offset)) {
                    converted += String.fromCharCode((((character.charCodeAt(0) - 'z'.charCodeAt(0)) + offset) % 26) + 'a'.charCodeAt(0) - 1)
                } else {
                    converted += String.fromCharCode(((('a'.charCodeAt(0) - character.charCodeAt(0)) + offset) % 26) + 'z'.charCodeAt(0) + 1)
                }
            } else {
                converted += offsetChar(character, offset)
            }
        }
        // If character alphanumeric uppercase
        else if (isAlphaUpper(character)) {

        }
        // Else return same value
        else {
            converted += character
        }
    }
    return converted
}

const isPositive = (num) => {
    return num >= 0
}

const offsetChar = (character, offset) => {
    return String.fromCharCode(character.charCodeAt(0) + offset)
}

const isAlphaLower = (character) => {
    return character >= 'a' && character <= 'z'
}

const isAlphaUpper = (character) => {
    return character >= 'A' &&  character <= 'Z'
}

export default caesar