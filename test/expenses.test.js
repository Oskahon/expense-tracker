const expenses = require('../src/expenses');
const Expense = require('../src/Expense');

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