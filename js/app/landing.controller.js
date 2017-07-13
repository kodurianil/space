var ISIPApp = angular.module("ISIPApp");
ISIPApp.controller("landingController", ["$stateParams", "$state","$http", "AppData", "$q", function ($stateParams, $state, $http, AppData, $q) {
    this.loadingData = true;
    $("#bodyISIPApp").css("overflow","auto");
    this.landingPagesInfo = {
        101:"televisions",
        102:"cameras"
    }
    this.searchWord = "";
    this.searchWord1 = "";
    this.productsList = [];
    this.facetResult = {};
    this.inputtag = {};
    this.pushCartItem = AppData.pushCartItem;
    this.cartItemIds = AppData.cartItemIds;
    this.bindFacetInfo = function(innerKey, innerMenu){
        return innerKey + " (" + innerMenu + ")";
    }
    this.removeFacet = function(facetKey,key){
        this.inputtag[facetKey].splice(key,1);
        this.searchByQ();
    }
    $http.post("http://localhost:6139/ISIFSearch/rest/searchProduct",
    {
        "locale": AppData.preferredLanguage,
        "mainCategory" : this.landingPagesInfo[$stateParams.navTabId],
        "searchString" : "",
        "facet": false
    })
    .then(function(response){
        this.productsList = response.data.documentList;
        this.facetResult = response.data.facetResult;
    }.bind(this), function(error){
        this.productsList = [];
        this.loadingData = false;
        this.facetResult = {};
    }.bind(this));
    // this.productsList = AppData.getProductsList($stateParams.navTabId);
    this.searchByQ = function(facetField, facetFieldValue){
        this.loadingData = true;
        // this.searchWord1 = this.searchWord1.replace(/\s+/g, '\\ ').toLowerCase();
        var params = {
            "locale": AppData.preferredLanguage,
            "mainCategory" : this.landingPagesInfo[$stateParams.navTabId],
            "searchString" : this.searchWord1,
            "facet": true
        };
        if(angular.isDefined(facetField)){
            if(angular.isUndefined(this.inputtag[facetField])){
                this.inputtag[facetField] = [];
            }
            if(this.inputtag[facetField].indexOf(facetFieldValue) == -1){
                this.inputtag[facetField].push(facetFieldValue);
            }            
        }
        params = angular.extend(params, this.inputtag)
        $http.post("http://localhost:6139/ISIFSearch/rest/searchProduct", params)
        .then(function(response){
            this.loadingData = false;
            this.productsList = response.data.documentList;
            this.facetResult = response.data.facetResult;
        }.bind(this), function(error){
            this.productsList = [];
            this.loadingData = false;
            this.facetResult = {};
        }.bind(this));
    }.bind(this);
}]);
