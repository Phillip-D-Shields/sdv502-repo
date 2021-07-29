class Calculator {
    constructor() {
    this.total = 0;
    }
    add(num) {
        this.total += num
    }
    subtract(num) {
        this.total -= num
    }
    multiply(num) {
        this.total *= num
    }
    divide(num) {
        if (num === 0) throw new Error('cant divide by zero');
        else this.total /= num;
    }
}

