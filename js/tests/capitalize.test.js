const capitalize = require('../capitalize/capitalize')

test('Single character gets capitalized', () => {
    expect(capitalize('a')).toBe('A')
})

test('Capital character gets returned unchanged', () => {
    expect(capitalize('B')).toBe('B')
})

test('Single lowercase word returns only first letter uppercase', () => {
    expect(capitalize('apple')).toBe('Apple')
})

test('Lowercase sentence returns back with only first letter uppercase', () => {
    expect(capitalize('this is a test.')).toBe('This is a test.')
})