import caesar from '../caesar/caesar'

test('Input of "a" and 1 should result in b', () => {
    expect(caesar('a', 1)).toBe('b')
})

test('You can input negative numbers', () => {
    expect(caesar('a', -1)).toBe('z')
})

test ('Rolling forward works', () => {
    expect(caesar('b', 26)).toBe('a')
}
)

test ('abc, 1 = bcd', () => {
    expect(caesar('abc', 1)).toBe('bcd')
})