var ISIPApp = angular.module("ISIPApp");
ISIPApp.controller("headerController",["$stateParams", "$state", "$scope","$sce", "AppData", function($stateParams, $state, $scope,$sce, AppData){
    this.currentTab = 0;
    
    if(angular.isDefined($stateParams.preferredLanguage)){
        this.preferredLanguage = $stateParams.preferredLanguage;
    } else {
        this.preferredLanguage = AppData.preferredLanguage;
    }
    
    $scope.$watch(function(){return $state.params.navTabId;}, function(newParams, oldParams){
        this.currentTab = angular.isDefined($state.params.navTabId)? parseInt($state.params.navTabId) : 0;
        this.loadChildNav(this.navTabs[this.currentTab].child);
    }.bind(this));

    this.navChildTabs = {};
    this.navTabs = {
        100 : {
            name:"ELECTRONICS",
            id : "201",
            child:{
                101 : {
                    id:101,
                    name:"Televisions",
                    image:"//sonyglobal.scene7.com/is/image/gwtprod/fd8b373909276cbe25e21a45def8ef16?fmt=png-alpha&wid=140&hei=48",
                    child:[]
                },
                102 : {
                    id:102,
                    name:"Cameras",
                    image:"//sonyglobal.scene7.com/is/image/gwtprod/93f98ce2df22fff8e298a46948a3a13c?fmt=png-alpha&wid=140&hei=48",
                    child:[]
                }
            }
        },
        103 : {
            name:"MUSIC",
            id : "103",
            child:{}
        },
        104 : {
            name: "PROFESSIONAL",
            id: "104",
            child:{}
        },
        105 : {
            name: "PLAYSTATION",
            id: "105",
            child:{}
        },
        106 : {
            name: "PICTURES",
            id: "106",
            child:{}
        }
    };

    this.getCartItem  = AppData.getCartItem;
    this.showPopover=false;
    this.showSubMenu = false;
    this.hideSubMenu=function(){
        this.showSubMenu = false;
    }
    this.popover = {
        title: 'Title'
    }; 
    
    this.onPreferredLanguage = function(){
        AppData.preferredLanguage = this.preferredLanguage;
    }.bind(this);
    
    this.loadChildNav = function(child){
        this.showSubMenu = false;
        if(angular.isDefined(child) && Object.keys(child).length){
            this.navChildTabs = child;
            this.showSubMenu = true;
        } else {
            this.navChildTabs = {};            
        }
        
    }.bind(this)

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