const Expense = require("./Expense");

const expenses = [
    new Expense('Food', 10),
    new Expense('Coffee', 8),
    new Expense('Cookies', 4),
    new Expense('Milksteak', 3),
];


function writeExpense(expense) {
    return expense.length;
}

async function readExpense() {
    const expense = new Expense('coffee', 8);
    return expense;
}

function listExpenses() {
    return expenses;
}

module.exports = {
    writeExpense,
    readExpense,
    listExpenses,
};