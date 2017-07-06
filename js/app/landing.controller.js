var ISIPApp = angular.module("ISIPApp");
ISIPApp.controller("landingController", ["$stateParams", "$state","$http", "AppData", "$q", function ($stateParams, $state, $http, AppData, $q) {
    this.loadingData = true;
    this.searchWord = "";
    this.searchWord1 = "";
    this.productsList = AppData.getProductsList($stateParams.navTabId);
    this.loadingData = false;
    this.searchByQ = function(product){
        this.searchWord1 = this.searchWord1.toLowerCase()
        if(!this.searchWord1.length){
            return true;
        }
        if((angular.isDefined(product.superModelName) && product.superModelName.toLowerCase().indexOf(this.searchWord1) > -1)){
            return true;
        }
        if(angular.isDefined(product.modelName) && product.modelName.toLowerCase().indexOf(this.searchWord1) > -1){
            return true;
        }
        if(angular.isDefined(product.longMarketingProductName) && product.longMarketingProductName.toLowerCase().indexOf(this.searchWord1) > -1){
            return true;
        }
        if(angular.isDefined(product.topFeatures)){
            var res = false;
            angular.forEach(product.topFeatures, function(feature){
                console.log(feature.toLowerCase(),this.searchWord1);
                if(!res && feature.toLowerCase().indexOf(this.searchWord1) > -1){
                    res = true;
                }
            }.bind(this));
            return res;
        }
        return false;
    }.bind(this);
    
    this.pushCartItem = AppData.pushCartItem;
    // this.getCartItem  = AppData.getCartItem;

}]);