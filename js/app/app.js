var ISIPApp = angular.module("ISIPApp", ['ui.router.compat', 'ui.bootstrap']);

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
            onEntry:function(){
                $("#bodyISIPApp").css("overflow","auto");
            },
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
            onEntry:function(){
                $("#bodyISIPApp").css("overflow","auto");
            },
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
                    constroller: function(){
                        console.log(window.impress);
                    }
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
    return function(value){
        return value.replace(/([A-Z])/g, " $1").toLowerCase();
    }    
});

