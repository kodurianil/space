var ISIPApp = angular.module("ISIPApp");

ISIPApp.service("AppData", ["$timeout","$http", function($timeout, $http){
    var cartItem = [];
    this.cartItemIds = [];
    this.preferredLanguage = "en_IN";
    
    function pushCartItem(item){
        this.cartItemIds.push(item.productId);
        cartItem.push(item);
    }

    function getCartItem(){
        return cartItem;
    }

    function deleteCartItem(index, item){
        item.isInCart = false;
        cartItem.splice(index, 1);
        if(this.cartItemIds.indexOf(item.productId)>-1){
            this.cartItemIds.splice(this.cartItemIds.indexOf(item.productId),1);
        }
    }
    
    function deleteAllCartItem(){
        cartItem.splice(0, cartItem.length);
        this.cartItemIds.splice(0,this.cartItemIds.length);
    }

    this.pushCartItem = pushCartItem;
    this.getCartItem  = getCartItem;
    this.deleteCartItem = deleteCartItem;
    this.deleteAllCartItem = deleteAllCartItem;
}]);