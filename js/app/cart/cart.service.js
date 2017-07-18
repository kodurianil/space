var ISIPApp = angular.module("ISIPApp");

ISIPApp.service("AppData", ["$timeout","$http", function($timeout, $http){
    var cartItem = [], cartItemIds = [];
    this.preferredLanguage = "en_IN";
    this.httpUrl = "http://localhost:6139/ISIFSearch";
    function pushCartItem(item){
        cartItemIds.push(item.productId);
        cartItem.push(item);
    }

    function getCartItem(){
        return cartItem;
    }

    function deleteCartItem(index, item){
        item.isInCart = false;
        cartItem.splice(index, 1);
        if(cartItemIds.indexOf(item.productId)>-1){
            cartItemIds.splice(cartItemIds.indexOf(item.productId),1);
        }
    }
    
    function deleteAllCartItem(){
        cartItem.splice(0, cartItem.length);
        cartItemIds.splice(0,cartItemIds.length);
    }

    function getCartItemIds(){
        return cartItemIds;
    }

    this.getCartItemIds = getCartItemIds;
    this.pushCartItem = pushCartItem;
    this.getCartItem  = getCartItem;
    this.deleteCartItem = deleteCartItem;
    this.deleteAllCartItem = deleteAllCartItem;
}]);