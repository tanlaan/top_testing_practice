import analyze from '../analyze/analyze'

test('Returns object with value average defined', () => {
    const data = analyze([1])
    expect(data.average).toBeDefined()
})

test('Returns object with value min defined', () => {
    const data = analyze([1])
    expect(data.min).toBeDefined()
})

test('Returns object with value max defined', () => {
    const data = analyze([1])
    expect(data.max).toBeDefined()
})

test('Returns object with value length defined', () => {
    const data = analyze([1])
    expect(data.length).toBeDefined()
})

test('Returns proper length', () => {
    const data = analyze([1,1])
    expect(data.length).toBe(2)
})

test('Returns a valid average', () => {
    const data = analyze([1,2,3])
    expect(data.average).toBe(2)
})

test('Returns a valid min', () => {
    const data = analyze([2,3,4])
    expect(data.min).toBe(2)
})

test('Returns a valid max', () => {
    const data = analyze([2,3,4])
    expect(data.max).toBe(4)
})

test('Passes initial values given', () => {
    const data = analyze([1,8,3,4,2,6])
    expect(data).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})