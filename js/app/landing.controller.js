var ISIPApp = angular.module("ISIPApp");
ISIPApp.controller("landingController", ["$stateParams", "$state","$http", "AppData", "$q", function ($stateParams, $state, $http, AppData, $q) {
    var jsonList = {
        "101":["KD-65X9300E","KD-65Z9D", "KD-75X9400D", "KD-85X8500D", "KDL-43W800D", "KLV-24P423D","KLV-32R412D", "KLV-43W752D", "KLV-48W562D", "KLV-49W672E"],
        "102":["dsc-hx400v-ce32", "dsc-rx1rm2-e32", "dsc-wx500-wce32", "ilca-68m-bq-in5", "ilca-77m2m-ap2", "ilca-99m2-qap2", "ilce-7rm2-bqap2", "ilce-7sm2-bqin5", "ilce-6000y-bap2", "ilce-6300l-bin5", "ilce-6500-bqin5"]
    };
    var jsonFiles = {
        "101": "TV",
        "102": "Camera"
    }
    this.searchWord = "";
    this.searchWord1 = "";
    this.productsList = [];
    
    angular.forEach(jsonList[$stateParams.navTabId], function(value){
        $http.get('json/'+jsonFiles[$stateParams.navTabId]+'/'+value+'.json').then(function(response) {
            this.productsList.push(response.data);
        }.bind(this));
    }.bind(this));
    

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