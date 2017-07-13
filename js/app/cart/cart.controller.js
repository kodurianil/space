var ISIPApp = angular.module("ISIPApp");
ISIPApp.controller("cartController", ["$stateParams", "$timeout", "AppData", "$scope", function($stateParams, $timeout, AppData, $scope){
    $("#bodyISIPApp").css("overflow","auto");
    this.productsList = AppData.getCartItem();
    this.deleteCartItem = AppData.deleteCartItem;
    this.deleteAllCartItem = AppData.deleteAllCartItem;

     $scope.productsList = AppData.getCartItem();
     window.cartSlide.slides =$scope.productsList;
}]);