var ISIPApp = angular.module("ISIPApp");
ISIPApp.controller("headerController",["$stateParams", "$state", "$scope","$sce", "AppData", function($stateParams, $state, $scope,$sce, AppData){
    this.currentTab = 0;
    $scope.$watch(function(){return $state.params.navTabId;}, function(newParams, oldParams){
        console.log(newParams, oldParams);
        this.currentTab = angular.isDefined($state.params.navTabId)? parseInt($state.params.navTabId) : 0;
    }.bind(this));
    this.navTabs = [
        {
            name:"ELECTRONICS",
            id : "102"
        },
        {
            name:"PLAYSTATION",
            id : "101"
        },
        {
            name:"MUSIC",
            id : "103"
        },
        {
            name: "PROFESSIONAL",
            id: "104"
        }
    ];
    this.getCartItem  = AppData.getCartItem;
    this.showPopover=false;
    
    this.popover = {
        title: 'Title'
    }; 
     this.popover.message = $sce.trustAsHtml('<b style="color: red">I can</b> have <div class="label label-success">HTML</div> content');
}]);
 
 ISIPApp.directive("cartPopover", function(){
    return {
    restrict: 'A',
    templateUrl: 'js/views/cart-popover.html',
    controller: 'headerController',
    controllerAs: 'hc'   
  }
 });