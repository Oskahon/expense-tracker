class Expense {
    constructor(description, price, timestamp = Date.now()) {
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
        this.timestamp = timestamp;
    }

    static parseMonth(timestamp) {
        const time = new Date(timestamp);
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];

        return months[time.getMonth()];
    }
}

module.exports = Expense;