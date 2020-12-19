import calculator from '../calculator/calculator'

// Addition function

test('Has a function named add', () => {
    expect(calculator.add).toBeDefined()
})

test('Adding 1 + 1 equals 2', () => {
    expect(calculator.add(1, 1)).toBe(2)
})

test('Adding 9 + 1 equals 10', () => {
    expect(calculator.add(9, 1)).toBe(10)
})

test('Adding 1 + -1 equals 0', () => {
    expect(calculator.add(1, -1)).toBe(0)
})

// Subtraction function

test('Has a function named subtract', () => {
    expect(calculator.subtract).toBeDefined()
})

test('Subtracting 1 - 1 equals 0', () => {
    expect(calculator.subtract(1, 1)).toBe(0)
})

test('Subtracting 10 - 1 equals 9', () => {
    expect(calculator.subtract(10, 1)).toBe(9)
})

// Division function

test('Has a function named divide', () => {
    expect(calculator.divide).toBeDefined()
})

test('Dividing 1 by 1 equals 1', () => {
    expect(calculator.divide(1, 1)).toBe(1)
})

test('Dividing by 0 is equals infinity', () => {
    expect(calculator.divide(1, 0)).toBe(Infinity)
})

test('Dividing 10 by 2 equals 5', () => {
    expect(calculator.divide(10, 2)).toBe(5)
})

// Multiply function

test('Has a function named multiply', () => {
    expect(calculator.multiply).toBeDefined()
})

test('Multiplying 1 by 1 equals 1', () => {
    expect(calculator.multiply(1, 1)).toBe(1)
})

test('Multiplying 2 by 5 equals 10', () => {
    expect(calculator.multiply(2, 5)).toBe(10)
})

test('Multiplying negative numbers works', () => {
    expect(calculator.multiply(1, -1)).toBe(-1)
})