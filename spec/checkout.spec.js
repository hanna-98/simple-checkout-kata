const Checkout = require('../src/checkout.js');

describe('No discount', () => {
    it('Should not add discount (1)', () => {
        let checkout = new Checkout(['C', 'C', 'C']);
        expect(checkout.total()).toEqual(0.75);
    })
    
    it('Should not add discount (2)', () => {
        checkout = new Checkout(['A', 'A', 'C']);
        expect(checkout.total()).toEqual(1.25);
    }) 
})

describe('Promotion applied', () => {
    it('Should apply "2 for £1.25" discount', () => {
        checkout = new Checkout(['B', 'B', 'B']);
        expect(checkout.total()).toEqual(2.00);
    })

    xit('Should apply "buy 3 get one free" discount', () => {
        checkout = new Checkout(['C', 'C', 'C', 'C']);
        expect(checkout.total()).toEqual(0.75);
    })

    xit('Should apply "2 for £1.25" AND "buy 3 get one free" discounts', () => {
        checkout = new Checkout(['B', 'B', 'C', 'C', 'C', 'C']);
        expect(checkout.total()).toEqual(2.00);
    })
})