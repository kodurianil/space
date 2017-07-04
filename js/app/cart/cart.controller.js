var ISIPApp = angular.module("ISIPApp");
ISIPApp.controller("cartController", ["$stateParams", "$timeout", "AppData", function($stateParams, $timeout, AppData){
    this.productsList = AppData.getCartItem();
    this.deleteCartItem = AppData.deleteCartItem;
    this.deleteAllCartItem = AppData.deleteAllCartItem;
}]);