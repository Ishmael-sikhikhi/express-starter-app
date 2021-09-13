module.exports = function PizzaCart(){

    var small = 0
    var medium = 0
    var large = 0

    var smallPrice = 0
    var mediumPrice = 0
    var largePrice = 0
    var total = 0

    function smallPizza(){
        return ++small
    }

    function mediumPizza(){
        return ++medium
    }

    function largePizza(){
        return ++large
    }

    function getSmallprice(){
        return smallPrice = Number(31.99 * small)
    }

    function getMediunPrice(){
        return mediumPrice = Number(55.99*medium)
    }

    function getLargePrice(){
        return largePrice = Number(87.99*large)
    }

    function orderTotal(){
        return total = smallPrice + mediumPrice + largePrice
    }

    return{
        orderTotal,
        smallPizza,
        mediumPizza,
        largePizza,
        getSmallprice,
        getMediunPrice,
        getLargePrice

    }
}