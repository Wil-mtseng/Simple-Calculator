var calculator = require('../calculator');

describe("Addition", function() {
    it("should add two numbers", function() {
        expect(calculator.add(1, 1)).toEqual(2);
    });
});

describe("Addition.1", function() {
    it("should add two negtive numbers", function() {
        expect(calculator.add1(-1, -1)).toEqual(-2);
    });
});

describe("Addition.2", function() {
    it("should add numbers", function() {
        expect(calculator.add2(4, 5)).toEqual(9);
    });
});

describe("Addition of many numbers", function() {
    it("should add many numbers", function() {
        expect(calculator.sum(1, 2, 3, 4)).toEqual(10);
    });
});

describe("Multiplication", function() {
    it("Should multiply two numbers", function() {
        expect(calculator.multiply(1, 2)).toEqual(2);
    });
});

describe("Multiplication of lots of numbers", function() {
    it("Should multiply two numbers", function() {
        expect(calculator.multiply(1, 2, 3, 4)).toEqual(2);
    });
});