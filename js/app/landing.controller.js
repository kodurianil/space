var ISIPApp = angular.module("ISIPApp");
ISIPApp.controller("landingController", ["$stateParams", "$state","$http", "AppData", "$q", function ($stateParams, $state, $http, AppData, $q) {
    this.loadingData = true;
    this.searchWord = "";
    this.searchWord1 = "";
    this.productsList = [];
    // console.log(AppData.preferredLanguage);
    $http.get("http://localhost:8983/solr/space2/select?wt=json&q=locale%3A"+AppData.preferredLanguage)
    .then(function(response){
        this.productsList = response.data.response.docs;
    }.bind(this), function(error){
        this.productsList = [];
        this.loadingData = false;
    }.bind(this));
    // this.productsList = AppData.getProductsList($stateParams.navTabId);
    this.searchByQ = function(){
        this.loadingData = true;
        this.searchWord1 = this.searchWord1.replace(/\s+/g, '\\ ').toLowerCase();
        $http.get("http://localhost:8983/solr/space2/select?wt=json&indent=true&q=mainCategory:televisions+AND+locale:"+AppData.preferredLanguage+"+AND+fullProductInfo:*"+this.searchWord1+"*&facet=true&facet.field=tvFeatures&facet.field=tvType&facet.field=tvScreenSize&facet.mincount=1")
        .then(function(response){
            this.loadingData = false;
            this.productsList = response.data.response.docs;
        }.bind(this), function(error){
            this.productsList = [];
            this.loadingData = false;
        }.bind(this));
    }.bind(this);
    
    this.pushCartItem = AppData.pushCartItem;
    // this.getCartItem  = AppData.getCartItem;

}]);
