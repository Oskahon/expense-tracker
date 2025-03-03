const expenses = require('../src/expenses');

test('returns the correct amount of chars written', () => {
    expect(expenses.writeExpense('test')).toBe(4);
});

test('empty string return 0', () => {
    expect(expenses.writeExpense('')).toBe(0);
});