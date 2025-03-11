class Expense {
    constructor(description, price) {
        if (description === undefined || price === undefined) {
            throw new Error('description and price are required');
        }
        if (description === '') {
            throw new Error('missing description');
        }
        if (price < 0) {
            throw new Error('price must be positive');
        }

        this.description = description;
        this.price = price;
        this.timestamp = Date.now();
    }
}

module.exports = Expense;