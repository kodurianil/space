var ISIPApp = angular.module("ISIPApp", ['ui.router.compat', 'ui.bootstrap']);

ISIPApp.config(['$stateProvider', '$urlRouterProvider', "$httpProvider", "$locationProvider",
    function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
        // $urlRouterProvider.otherwise("/");

        if (window.location.hostname == "localhost") {
            $httpProvider.defaults.useXDomain = true;
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
                url: "/landing/:navTabId",
                views: {
                    "@": {
                        templateUrl: 'js/views/landing.html',
                        controller: "landingController",
                        controllerAs: "landCtrl"
                    }
                }
            })
            .state("landing.rightcontent", {
                url: "/:leftnav",
                views: {
                    "rightcontent@landing": {
                        templateUrl: 'js/views/right.info.html',
                        controller: "rightInfoController",
                        controllerAs: "rightCtrl"
                    }
                }
            })
            .state("landing.search", {
                url: "/search/:q",
                views: {
                    "@landing": {
                        templateUrl: 'js/views/search.html',
                        controller: "searchController",
                        controllerAs: "searchCtrl"
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
                        templateUrl: 'js/views/preview.html'
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
    .run(["AppData", function (AppData) {
        AppData.setProductsList();
        $("#bodyISIPApp").css("overflow","auto");
    }]);