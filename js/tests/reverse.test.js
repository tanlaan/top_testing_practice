import reverseString from '../reverse/reverse'

test('A single character reversed is itself.', () => {
    expect(reverseString('a')).toBe('a')
})

test('Two of the same character should return the same', () => {
    expect(reverseString('aa')).toBe('aa')
})

test('One lower and one uppercase letter should be reversed', () => {
    expect(reverseString('Aa')).toBe('aA')
})

test('Will reverse a sentence', () => {
    expect(reverseString('this is a test.')).toBe('.tset a si siht')
})