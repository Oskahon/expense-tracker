class Expense {
    constructor(description, price) {
        if (description === '') {
            throw new Error('missing description');
        }
        if (price < 0) {
            throw new Error('price must be positive');
        }

        this.description = description;
        this.price = price;
    }
}

module.exports = Expense;