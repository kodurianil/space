var ISIPApp = angular.module("ISIPApp");
ISIPApp.controller("cartController", ["$stateParams", "$timeout", "AppData", "$scope", "$state", "$http",function($stateParams, $timeout, AppData, $scope, $state, $http){
    $("#bodyISIPApp").css("overflow","auto");
    this.productsList = AppData.getCartItem();
    this.deleteCartItem = AppData.deleteCartItem;
    this.deleteAllCartItem = AppData.deleteAllCartItem;
    
    this.autoTemplate = function(){
        if(this.productsList.length <= 3){
            $state.go("preview1");
        } else {
            $state.go("preview2");
        }
    };

    this.comparison = function(){
        $http.post(AppData.httpUrl + "/rest/downloadCatalog", null, {
            "responseType" : 'arraybuffer',
            "headers": {
                'Content-type': 'application/json',
                'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            }
        }).then(function(data){
            console.log(data.data);
        });
    }

    $scope.productsList = AppData.getCartItem();
    window.cartSlide.slides =$scope.productsList;
}]);