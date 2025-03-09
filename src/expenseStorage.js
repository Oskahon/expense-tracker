const fs = require('fs');
const path = require('path');
const Expense = require("./Expense");

const expenses = [
    new Expense('Food', 10),
    new Expense('Coffee', 8),
    new Expense('Cookies', 4),
    new Expense('Milksteak', 3),
];


function writeExpenses(filePath, expenses) {
    try {
        const directory = path.dirname(filePath);
        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory, { recursive: true });
        }

        fs.writeFileSync(filePath, JSON.stringify(expenses, null, 2), 'utf-8');
        return { success: true };
    } catch (error) {
        return { error: `Failed to write expenses: ${error.message}` };
    }

    // Write expense to file

}

async function readExpense() {
    const expense = new Expense('coffee', 8);
    return expense;
}

function listExpenses() {
    return expenses;
}

module.exports = {
    writeExpenses,
    readExpense,
    listExpenses,
};