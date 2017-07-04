var ISIPApp = angular.module("ISIPApp");

ISIPApp.service("AppData", ["$timeout", function($timeout){
    var cartItem = [];
    function pushCartItem(item){
        cartItem.push(item);
    }

    function getCartItem(){
        return cartItem;
    }

    function deleteCartItem(index, item){
        cartItem.splice(index, 1);
    }
    
    function deleteAllCartItem(){
        cartItem.splice(0, cartItem.length);
    }

    this.pushCartItem = pushCartItem;
    this.getCartItem  = getCartItem;
    this.deleteCartItem = deleteCartItem;
    this.deleteAllCartItem = deleteAllCartItem;
}]);