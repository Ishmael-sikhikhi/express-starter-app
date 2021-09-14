const assert = require('assert');
const Pizzas = require('../pizza-cart')

const pizzaInst = Pizzas()

describe('Pizza cart', ()=>{
    it('It should return zero when no order is been made', ()=>{
        assert.equal(0,pizzaInst.orderTotal());
    })
    it('It should return total of R 31,99 if 1 small pizza has been ordered', ()=>{
        pizzaInst.smallPizza();
        pizzaInst.getSmallprice()
        assert.equal(31.99, pizzaInst.orderTotal());
    })
    it('It should return 87.98 pizza price if  medium pizza is been added', ()=>{
        pizzaInst.mediumPizza();
        pizzaInst.getMediunPrice()
        assert.equal(87.98, pizzaInst.orderTotal())
    })
    it('It should return 175.97 if large pizza is added to the previous order', ()=>{
        pizzaInst.largePizza()
        pizzaInst.getLargePrice()
        assert.equal(175.97, pizzaInst.orderTotal())
    })
    it('It should add on the previous amount if user add small pizza to tatal of 207.96', ()=>{
        pizzaInst.addSmall()
        pizzaInst.getSmallprice()
        assert.equal(207.96, pizzaInst.orderTotal())
    })

    it('It should subtract from previous total large pizza price if the user minus it and return 119.97', ()=>{
        pizzaInst.subtractLarge()
        pizzaInst.getLargePrice()
        assert.equal(119.97, pizzaInst.orderTotal())
    })
})