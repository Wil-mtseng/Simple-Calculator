var calculator = require('../src/calculator');

describe("Addition", function() {
    it("should add two numbers", function() {
        expect(calculator.addition(1, 1)).toEqual(2);
    });
});


describe("Addition", function() {
    it("should add two numbers", function() {
        expect(calculator.addition(-1, -1)).toEqual(-2);
    });
});

describe("Addition", function() {
    it("should add two numbers", function() {
        expect(calculator.addition(4, 5)).toEqual(9);
    });
});

describe("Addition of many numbers", function() {
    it("should add many numbers", function() {
        expect(calculator.addition(1, 2, 3, 4)).toEqual(10);
    });
});

describe("Multiplication", function() {
    it("Should multiply two numbers", function() {
        expect(calculator.multiplication(1, 2)).toEqual(2);
    });
});

describe("Multiplication ", function() {
    it("Should multiply of lots of numbers", function() {
        expect(calculator.multiplication(1, 2, 3, 4)).toEqual(24);
    });
});