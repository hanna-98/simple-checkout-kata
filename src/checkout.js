const items = {
    A: 0.50,
    B: 0.75,
    C: 0.25
}

class Checkout {    
    constructor(basket){
        this.basket = basket;
        this.cost = 0;
    }

    total(){
        let cost = this.basket.map(item => items[item]);
        return cost.reduce((prev, curr) => prev + curr, 0);
    }

    checkPromo(){

    }
}

module.exports = Checkout;