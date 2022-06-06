describe('No discount', () => {
    it('Should not add discount (1)', () => {
        expect(checkout(['C', 'C', 'C'])).toEqual(0.75);
    })
    
    xit('Should not add discount (2)', () => {
        expect(checkout(['A', 'A', 'C'])).toEqual(1.25);
    }) 
})

describe('Promotion applied', () => {
    xit('Should apply "2 for £1.25" discount', () => {
        expect(checkout(['B', 'B', 'B'])).toEqual(2.00);
    })

    xit('Should apply "buy 3 get one free" discount', () => {
        expect(checkout(['C', 'C', 'C', 'C'])).toEqual(0.75);
    })

    xit('Should apply "2 for £1.25" AND "buy 3 get one free" discounts', () => {
        expect(checkout(['B', 'B', 'C', 'C', 'C', 'C'])).toEqual(2.00);
    })
})