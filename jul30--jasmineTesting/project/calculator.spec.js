// use an 'x' before 'describe' or 'it'
describe('calculator.js', function() {
    it('should add numbers', () => {
        const calc = new Calculator()
        calc.add(5)

        expect(calc.total).toBe(5)
    })

    it('should subtract numbers', () => {
        const calc = new Calculator()
        calc.total = 30
        calc.subtract(5)

        expect(calc.total).toBe(25)
    })

    it('should multiply numbers', () => {
        const calc = new Calculator()
        calc.total = 20
        calc.multiply(5)

        expect(calc.total).toBe(100)
    })

    it('should divide numbers', () => {
        const calc = new Calculator()
        calc.total = 100
        calc.divide(5)

        expect(calc.total).toBe(20)
    })
})