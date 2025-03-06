const Expense = require("../src/Expense");

test('Creates Expense as expected', () => {
    const testExpense = {
        description: 'test',
        price: 5,
    };

    expect(new Expense('test', 5)).toEqual(testExpense);
});

test('Handles zero price', () => {
    const testExpense = {
        description: 'test',
        price: 0,
    };

    expect(new Expense('test', 0)).toEqual(testExpense);
});

test('Description must be defined', () => {
    expect(() => new Expense(5)).toThrow('description and price are required');
});

test('Price must be defined', () => {
    expect(() => new Expense('test')).toThrow('description and price are required');
});

test('Price and Description must be defined', () => {
    expect(() => new Expense()).toThrow('description and price are required');
});

test('Empty description throws error', () => {
    expect(() => new Expense('', 5)).toThrow('missing description');
});

test('Negative price throws error', () => {
    expect(() => new Expense('test', -5)).toThrow('price must be positive');
});