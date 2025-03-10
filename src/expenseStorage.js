const fs = require('fs');
const path = require('path');
const Expense = require("./Expense");

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

module.exports = {
    writeExpenses,
    readExpenses,
};