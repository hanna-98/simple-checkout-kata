class Checkout {    
    constructor(basket){
        this.basket = basket;
    }

    getBasket(){
        return this.basket;
    }

    total(){
        let a = this.basket.filter(item => item === 'A');
        let b = this.basket.filter(item => item === 'B');
        let c = this.basket.filter(item => item === 'C');
        let costA = a.length * 0.50;
        let costB = 0.00;
        let costC = 0.00;

        if (b.length % 2 === 0){
            costB = (b.length / 2) * 1.25;
        } else {
            costB = ((b.length  - 1) / 2 * 1.25) + 0.75;
        }

        if (c.length % 4 === 0){
            costC = (c.length * 3/4) * 0.25;
        } else {
            costC = ((c.length - (c.length % 4)) * 3/4 * 0.25) + ((c.length % 4) * 0.25);
        } 
        return costA + costB + costC;
    }
}

module.exports = Checkout;