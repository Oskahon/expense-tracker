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
}

function readExpenses(filePath) {
    try {
        if (!fs.existsSync(filePath)) {
            return { expenses: [] };
        }

        const data = fs.readFileSync(filePath, 'utf-8');

        const expenses = JSON.parse(data);
        if (!Array.isArray(expenses)) {
            return { error: 'Invalid expense file format' };
        }

        return { expenses };
    } catch (error) {
        return { error: `Failed to read expenses: ${error.message}` };
    }
}

function listExpenses() {
    return expenses;
}

module.exports = {
    writeExpenses,
    readExpenses,
    listExpenses,
};