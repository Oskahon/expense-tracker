const { Command, Option } = require('commander');
const program = new Command();

program.command('add')
    .description('Add expense')
    .argument('<name>', 'Name of expense')
    .argument('[amount]', 'Amount paid for expense', '5')
    .action((name, amount) => {
        console.log(`Added ${name} - ${amount}e`);
    });

program.command('list')
    .description('List expenses')
    .argument('<items...>')
    .action((items) => {
        items.forEach(item => {
            console.log(item);
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

function printExpenses() {
    console.log();
    console.log('Your expenses:');
    console.log();
    console.log('\t- Food \t\t 20e');
    console.log('\t- Coffee \t 8e');
    console.log('\t- Ice Cream \t 5e');
    console.log();
}

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
