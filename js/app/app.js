var ISIPApp = angular.module("ISIPApp", ['ui.router.compat', 'ui.bootstrap', "ngSanitize"]);

ISIPApp.config(['$stateProvider', '$urlRouterProvider', "$httpProvider", "$locationProvider",
    function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/");
        // $locationProvider.hashPrefix('!');
        // $locationProvider.html5Mode(true);
        if (window.location.hostname == "localhost") {
            $httpProvider.defaults.useXDomain = true;
             delete $httpProvider.defaults.headers.common['X-Requested-With'];
        }

        $stateProvider.state("welcome", {
            url: "/",
            views: {
                "@": {
                    templateUrl: 'js/views/welcome.html',
                    controller: "welcomeController",
                    controllerAs: "welCtrl"
                }
            }
        })
        .state("landing", {
            url: "/landing/:navTabId/:lang",
            views: {
                "@": {
                    templateUrl: 'js/views/landing.html',
                    controller: "landingController",
                    controllerAs: "landCtrl"
                }
            }
        })
        .state("cart", {
            url: "/cart",
            views: {
                "@": {
                    templateUrl: 'js/views/cart.html',
                    controller: "cartController",
                    controllerAs: "cartCtrl"
                }
            }
        })
        .state("preview1", {
            url: "/preview1",
            views: {
                "@":  {
                    templateUrl: 'js/views/preview.html',
                    controller: ["AppData","$scope",function(AppData, $scope){
                        $scope.productsList = AppData.getCartItem(); 
                        window.cartSlide.slides =$scope.productsList;
                        
                    }],
                    controllerAs: "p1"
                }
            }
        })
        .state("preview2", {
            url: "/preview2",
            views: {
                "@":  {
                    templateUrl: 'js/views/preview2.html'
                }
            }
        });
    }
])
.run(["AppData","$http", function (AppData, $http) {
    // AppData.setProductsList();
    $("#bodyISIPApp").css("overflow","auto");
    $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  // Send this header only in post requests. Specifies you are sending a JSON object
    $http.defaults.headers.post['dataType'] = 'json'
}])

.filter("spaceBeforeUpper", function(){
    return function(value, param){
        console.log(param)
        if(param){
            return value.replace("_", " ").toLowerCase();
        }
        return value.replace(/([A-Z])/g, " $1").toLowerCase();
    };    
})

.filter("keysLength", function(){
    return function(value){
        if(angular.isDefined(value) && angular.isObject(value)){
            return Object.keys(value).length;
        }
        return 0;
    }
});
