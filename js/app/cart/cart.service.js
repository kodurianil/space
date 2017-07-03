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
    
    this.pushCartItem = pushCartItem;
    this.getCartItem  = getCartItem;
    this.deleteCartItem = deleteCartItem;
}]);