const caesar = (words, offset) => {
    let converted = ''
    for (let i = 0; i < words.length; i += 1) {
        // Get character
        let character = words.charAt(i)
        // let newChar = offsetChar(character, offset)
        let newChar = offsetChar(character, offset)
        // add newChar to converted
        converted += newChar
    }
    return converted
}

const isPositive = (num) => {
    return num >= 0
}

const isAlphaLower = (character) => {
    return character >= 'a' && character <= 'z'
}

const isAlphaUpper = (character) => {
    return character >= 'A' &&  character <= 'Z'
}

const addOffset = (character, offset) => {
    return String.fromCharCode(character.charCodeAt(0) + offset)
}

const rollOver = (character, offset) => {
    if (isAlphaLower(character)) {
        if (isPositive(offset)) {
            return String.fromCharCode((((character.charCodeAt(0) - 'z'.charCodeAt(0)) + offset) % 26) + 'a'.charCodeAt(0) - 1)
        } else {
            return String.fromCharCode(((('a'.charCodeAt(0) - character.charCodeAt(0)) + offset) % 26) + 'z'.charCodeAt(0) + 1)
        }
    } else {
        if (isPositive(offset)) {
            return String.fromCharCode((((character.charCodeAt(0) - 'Z'.charCodeAt(0)) + offset) % 26) + 'A'.charCodeAt(0) - 1)
        } else {
            return String.fromCharCode(((('A'.charCodeAt(0) - character.charCodeAt(0)) + offset) % 26) + 'Z'.charCodeAt(0) + 1)
        }
    }

}

const offsetChar = (character, offset) => {
    
    // If character alphanumeric lowercase
    if (isAlphaLower(character)) {
        let newCharCode = addOffset(character, offset)

        // Test if we are still within bounds
        if (isAlphaLower(newCharCode)) return newCharCode

        // We went out of bounds, roll over
        return rollOver(character, offset)
    }

    // If character alphanumeric uppercase
    else if (isAlphaUpper(character)) {
        let newCharCode = addOffset(character, offset)

        // Test if we are still within bounds
        if (isAlphaUpper(newCharCode)) return newCharCode

        // We went out of bounds, roll over
        return rollOver(character, offset)
    }

    // Else return same value
    else {
        return character
    }
}


export default caesar