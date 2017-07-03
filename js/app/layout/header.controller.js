var ISIPApp = angular.module("ISIPApp");
ISIPApp.controller("headerController",["$stateParams", "$state", "$scope", "AppData", function($stateParams, $state, $scope, AppData){
    this.currentTab = 0;
    $scope.$watch(function(){return $state.params.navTabId;}, function(newParams, oldParams){
        console.log(newParams, oldParams);
        this.currentTab = angular.isDefined($state.params.navTabId)? parseInt($state.params.navTabId) : 0;
    }.bind(this));
    this.navTabs = [
        {
            name:"SPE",
            id : "100"
        },
        {
            name:"PLAYSTATION",
            id : "101"
        },
        {
            name:"ELECTRONICS",
            id : "102"
        }
    ];
    this.getCartItem  = AppData.getCartItem;
}]);