import { Calculator } from '../src/calculator';
import { ErrorReporter } from '../src/error-reporter';
import { expect } from 'chai';

import { operation } from '../src/types';

describe('Tests for calculator:', () => {
    let calculator: any;
    const { sum, division, multiplication, subtraction } = operation;

    describe('Tests for sum operation', () => {
        before(() => {
            calculator = new Calculator();
        });

        it('Should sum two positive numbers', () => {
            expect(calculator.sum(10, 12)).to.eq(22, ErrorReporter.report(sum));
        });

        it('Should sum number with zero', () => {
            expect(calculator.sum(1000, 0)).to.eq(1000, ErrorReporter.report(sum));
        });

        it('Should sum with one negative number', () => {
            expect(calculator.sum(99, -9)).to.eq(90, ErrorReporter.report(sum));
        });

        it('Should sum two negative numbers', () => {
            expect(calculator.sum(-5, -2)).to.eq(-7, ErrorReporter.report(sum));
        });

        it('Should sum float numbers', () => {
            expect(calculator.sum(11.3, 18.7)).to.eq(30, ErrorReporter.report(sum));
        });

        after(() => {
            calculator = null;
        });
    });

    describe('Tests for subtraction operation', () => {
        before(() => {
            calculator = new Calculator();
        });

        it('Should subtract two positive numbers', () => {
            expect(calculator.subtract(150, 50)).to.eq(100, ErrorReporter.report(subtraction));
        });

        it('Should subtract number with zero', () => {
            expect(calculator.subtract(13, 0)).to.eq(13, ErrorReporter.report(subtraction));
        });

        it('Should subtract with one negative number', () => {
            expect(calculator.subtract(99, -9)).to.eq(108, ErrorReporter.report(subtraction));
        });

        it('Should subtract two negative numbers', () => {
            expect(calculator.subtract(-5, -2)).to.eq(-3, ErrorReporter.report(subtraction));
        });

        it('Should subtract with one negative float number', () => {
            expect(calculator.subtract(-15.3, 3)).to.eq(-18.3, ErrorReporter.report(subtraction));
        });

        after(() => {
            calculator = null;
        });
    });

    describe('Tests for multiplication operation', () => {
        before(() => {
            calculator = new Calculator();
        });

        it('Should multiply two positive numbers', () => {
            expect(calculator.multiply(11, 11)).to.eq(121, ErrorReporter.report(multiplication));
        });

        it('Should multiply number with zero', () => {
            expect(calculator.multiply(-540, 0)).to.eq(0, ErrorReporter.report(multiplication));
        });

        it('Should multiply with float number', () => {
            expect(calculator.multiply(19.5, 1)).to.eq(19.5, ErrorReporter.report(multiplication));
        });

        it('Should multiply with negative float number', () => {
            expect(calculator.multiply(4, -0.2)).to.eq(-0.8, ErrorReporter.report(multiplication));
        });

        it('Should multiply with negative number', () => {
            expect(calculator.multiply(-888, 1)).to.eq(-888, ErrorReporter.report(multiplication));
        });


        after(() => {
            calculator = null;
        });
    });

    describe('Tests for division operation', () => {
        before(() => {
            calculator = new Calculator();
        });

        it('Should divide two positive numbers', () => {
            expect(calculator.divide(1000, 50)).to.eq(20, ErrorReporter.report(division));
        });

        it('Should divide when first number < second number', () => {
            expect(calculator.divide(2, 10)).to.eq(0.2, ErrorReporter.report(division));
        });

        it('Should divide positive and negative numbers', () => {
            expect(calculator.divide(81, -9)).to.eq(-9, ErrorReporter.report(division));
        });

        it('Should divide two negative numbers', () => {
            expect(calculator.divide(-81, -9)).to.eq(9, ErrorReporter.report(division));
        });

        it('Should divide zero on number', () => {
            expect(calculator.divide(0, 100500)).to.eq(0, ErrorReporter.report(division));
        });

        after(() => {
            calculator = null;
        });
    });
});
