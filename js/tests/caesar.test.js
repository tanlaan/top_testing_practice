import caesar from '../caesar/caesar'

test('Input of "a" and 1 should result in b', () => {
    expect(caesar('a', 1)).toBe('b')
})

test('You can input negative numbers', () => {
    expect(caesar('a', -1)).toBe('z')
})

test ('Rolling forward works', () => {
    expect(caesar('a', 26)).toBe('a')
})

test ('abc, 1 = bcd', () => {
    expect(caesar('abc', 1)).toBe('bcd')
})

test ('offsets bigger than 25 work', () => {
    expect(caesar('a', 52)).toBe('a')
})

test ('Ignores punctuation', () => {
    expect(caesar('a!', 1)).toBe('b!')
})

test ('Capital letters work', () => {
    expect(caesar('A', 1)).toBe('B')
})

test ('Mixed case works as well', () => {
    expect(caesar('aA', 1)).toBe('bB')
})