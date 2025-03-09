const { Command } = require('commander');
const expenseStorage = require('./src/expenseStorage');
const Expense = require('./src/Expense');
const program = new Command();

program.command('add')
    .description('Add expense')
    .argument('<description>', 'Name of expense')
    .argument('<price>', 'Amount paid for expense')
    .action((description, price) => {
        const expenses = [new Expense(description, price)];
        expenseStorage.writeExpenses('./expenses.json', expenses);
    });

program.command('list')
    .description('List expenses')
    .action(() => {
        expenses.listExpenses().forEach(expense => {
            console.log(`${expense.description} - ${expense.price}`);
        });
    });

program.command('delete')
    .description('Delete item')
    .argument('<id>', 'expense id', parseInt)
    .action((id) => {
        if (isNaN(id)) {
            console.error('Not a number');
            return;
        }
        console.log('deleted %s', id);
    });


program.parse();

//** The Plan */
// 1. Look into commander.js library
//// 2. Create a list of command and what they are supposed to do
// 3. Start planning what functionality is required for the app
//      Some ideas to get started:
//      - Get commandline arguments
//      - Save data to file in JSON
//      - Parse flags and data from arguments
//      - Create functionality for the commands
//      - Create a help functionality that explains the app usage

//** Commands */
// add - Add an expense
// update - Update an expense
// delete - Detele an expense
// list - List all expenses
// summary - Get a summary of all expenses
// summary -Month <month_number> - get a monthly summary of expenses

//** Additional features */
// Expense categories - Add categories to expenses for filtering
// Set a monthly budget and show warning when nearing it
// Allow exporting to CSV file
