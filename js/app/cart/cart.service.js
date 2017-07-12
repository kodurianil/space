var ISIPApp = angular.module("ISIPApp");

ISIPApp.service("AppData", ["$timeout","$http", function($timeout, $http){
    var cartItem = [];
    this.preferredLanguage = "en_IN";
    
    function pushCartItem(item){
        cartItem.push(item);
    }

    function getCartItem(){
        return cartItem;
    }

    function deleteCartItem(index, item){
        item.isInCart = false;
        cartItem.splice(index, 1);
    }
    
    function deleteAllCartItem(){
        cartItem.splice(0, cartItem.length);
        setProductsList();
    }

    this.pushCartItem = pushCartItem;
    this.getCartItem  = getCartItem;
    this.deleteCartItem = deleteCartItem;
    this.deleteAllCartItem = deleteAllCartItem;
}]);