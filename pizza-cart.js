module.exports = function PizzaCart(){

    var small = 0
    var medium = 0
    var large = 0

    var smallPrice = 0
    var mediumPrice = 0
    var largePrice = 0
    var total = 0
    var status = ''

    function subtractSmall(){
        if(small > 0){
            return --small
        }
        else {
            return small = 0
        }
    }

    function subtractMedium(){
        if(medium > 0){
            return --medium
        }
        else {
            return medium = 0
        }
    }

    function subtractLarge(){
        if(large > 0){
            return --large
        }
        else {
            return large = 0
        }
    }//

    function addSmall(){
        if(small !== 0){
            return ++small
        }
        else {
            return small = 0
        }
    }

    function addMedium(){
        if(medium !== 0){
            return ++medium
        }
        else {
            return medium = 0
        }
    }

    function addLarge(){
        if(large !== 0){
            return ++large
        }
        else {
            return large = 0
        }
    }
    
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
        total = smallPrice + mediumPrice + largePrice
        return total.toFixed(2)
    }

    function upDateStatus(stut){
        
        return status = stut
    }

    function orders(){
        const order = {
            orderId : Math.floor(Math.random() * 100),
            status : upDateStatus(),
            amount : orderTotal()

          }

          return order
    }

    return{
        orderTotal,
        smallPizza,
        mediumPizza,
        largePizza,
        getSmallprice,
        getMediunPrice,
        getLargePrice,
        subtractSmall,
        subtractMedium,
        subtractLarge,
        addSmall,
        addMedium,
        addLarge,
        upDateStatus,
        orders
    }
}