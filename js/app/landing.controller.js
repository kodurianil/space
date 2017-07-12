var ISIPApp = angular.module("ISIPApp");
ISIPApp.controller("landingController", ["$stateParams", "$state","$http", "AppData", "$q", function ($stateParams, $state, $http, AppData, $q) {
    this.loadingData = true;
    this.searchWord = "";
    this.searchWord1 = "";
    this.productsList = [];
    this.facetResult = {};
    this.inputtag = [];
    this.pushCartItem = AppData.pushCartItem;
    this.cartItemIds = AppData.cartItemIds;
    this.bindFacetInfo = function(innerKey, innerMenu){
        return innerKey + " (" + innerMenu + ")";
    }
    // console.log(AppData.preferredLanguage);
    // http://usdl013:6178/ISIFSearch/rest/searchProduct
    // {
    //     "locale": AppData.preferredLanguage,
    //     "mainCategory" : "televisions",
    //     "searchString" : ""
    // }
    $http.get("/json/jsondata.json")
    .then(function(response){
        this.productsList = response.data.documentList;
        this.facetResult = response.data.facetResult;
        this.inputtag = response.data.inputtag;
    }.bind(this), function(error){
        this.productsList = [];
        this.loadingData = false;
        this.facetResult = {};
        this.inputtag = [];
    }.bind(this));
    // this.productsList = AppData.getProductsList($stateParams.navTabId);
    this.searchByQ = function(facetField, facetFieldValue){
        this.loadingData = true;
        this.searchWord1 = this.searchWord1.replace(/\s+/g, '\\ ').toLowerCase();
        console.log(angular.toJson({
            "locale": AppData.preferredLanguage,
            "mainCategory" : "televisions",
            "searchString" : this.searchWord1,
            "facetFieldValue" : facetFieldValue,
            "facetField" : facetField,
            "facet": true
        }));
        $http.post("http://usdl013:6178/ISIFSearch/rest/searchProduct", {
            "locale": AppData.preferredLanguage,
            "mainCategory" : "televisions",
            "searchString" : this.searchWord1,
            "facetFieldValue" : facetFieldValue,
            "facetField" : facetField,
            "facet": true
        })
        .then(function(response){
            this.loadingData = false;
            this.productsList = response.data.documentList;
            this.facetResult = response.data.facetResult;
            this.inputtag = response.data.inputtag;
        }.bind(this), function(error){
            this.productsList = [];
            this.loadingData = false;
            this.facetResult = {};
            this.inputtag = [];
        }.bind(this));
    }.bind(this);
}]);
