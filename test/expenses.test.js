const expenses = require('../src/expenses');
const Expense = require('../src/Expense');

describe('writeExpense', () => {
    test('returns the correct amount of chars written', () => {
        expect(expenses.writeExpense('test')).toBe(4);
    });

    test('empty string return 0', () => {
        expect(expenses.writeExpense('')).toBe(0);
    });
});

describe('readExpense', () => {
    beforeEach(() => {
        testData = new Expense('coffee', 8);
    });

    test('object assignment', () => {
        return expect(expenses.readExpense()).resolves.toEqual(testData);
    });

    test('object is defined', () => {
        const expense = expenses.readExpense();
        expect(expense).toBeDefined();
    });
});