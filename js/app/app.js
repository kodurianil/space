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
                        $scope.productsList = [
                            {
                                name:"KD-65Z9D",
                                title:"Title: Z9D | LED | 4K Ultra HD | High Dynamic Range (HDR) | Smart TV (Android TV™)",
                                img:"//sonyglobal.scene7.com/is/image/gwtprod/a9a1a4facfa90abf80b09ac5d1509de7?fmt=png-alpha",
                                prelabel:"Discover a picture unlike any other in 4K HDR with ultra-contrast.",
                                preDec:"Experience the most stunning picture with the ZD9 4K HDR Android TV, featuring the 4K HDR Processor X1 Extreme and the LED Backlight Master Drive. Explore here.",
                                subDec:"Experience the most stunning picture with the ZD9 4K HDR Android TV, featuring the 4K HDR Processor X1 Extreme and the LED Backlight Master Drive. Explore here.",
                                splFeature:[
                                    "Available in 164 cm (65)",
                                    "4K High Dynamic Range",
                                    "4K HDR Processor X1™ Extreme",
                                    "Backlight Master Drive™",
                                    "Android TV"
                                ],
                                feature : [{
                                    previewSubhead:"Backlight Master Drive™",
                                    previewDesc : "The Backlight Master Drive™ is a full-array LED backlight technology that combines an ultra-dense LED structure, a spectacular					algorithm and a completely new optical design. Powered by the 4K HDR Processor™ X1 Extreme, this technology delivers					incredibly deep black, dazzling lights and more vibrant colour.&nbsp;",
                                    previewImage :"//sonyglobal.scene7.com/is/image/gwtprod/93abebedf98605e91d91881c4e04ed8f?fmt=jpeg",
                                }, {
                                    previewSubhead:"4K HDR Processor X1™ Extreme: So real you can feel it",
                                    previewDesc : "Made to enhance the latest generation of 4K HDR pictures, the 4K HDR Processor X1™ Extreme brings reality to every scene. With 40% more real-time image processing than our renowned 4K Processor X1™, it delivers unprecedented picture quality for everything you watch, upscaling content from any source nearer to 4K HDR quality.",
                                    previewImage :"//sonyglobal.scene7.com/is/image/gwtprod/a68eed5e04bbdbea2da587cc974cc161?fmt=jpeg",
                                }, {
                                    previewSubhead:"Uncover the detail with 4K HDR",
                                    previewDesc : "A High Dynamic Range (HDR) compatible TV will change the way you look at TV. Combined with 4K Ultra HD resolution, HDR video content delivers exceptional detail, colour and contrast, with a far wider range of brightness than other video formats. The result is the most lifelike picture that TV has ever been able to create, with brilliant highlights and fine detail.",
                                    previewImage :"//sonyglobal.scene7.com/is/image/gwtprod/4fd45e3ec09cede1cf537c428165c504?fmt=jpeg",
                                }]
                            },
                            {
                                name:"KD-1111",
                                title:"Title: Z9D | LED | 4K Ultra HD | High Dynamic Range (HDR) | Smart TV (Android TV™)",
                                img:"//sonyglobal.scene7.com/is/image/gwtprod/a9a1a4facfa90abf80b09ac5d1509de7?fmt=png-alpha",
                                prelabel:"Discover a picture unlike any other in 4K HDR with ultra-contrast.",
                                preDec:"Experience the most stunning picture with the ZD9 4K HDR Android TV, featuring the 4K HDR Processor X1 Extreme and the LED Backlight Master Drive. Explore here.",
                                subDec:"Experience the most stunning picture with the ZD9 4K HDR Android TV, featuring the 4K HDR Processor X1 Extreme and the LED Backlight Master Drive. Explore here.",
                                splFeature:[
                                    "Available in 164 cm (65)",
                                    "4K High Dynamic Range",
                                    "4K HDR Processor X1™ Extreme",
                                    "Backlight Master Drive™",
                                    "Android TV"
                                ],
                                feature : [{
                                    previewSubhead:"Backlight Master Drive™",
                                    previewDesc : "The Backlight Master Drive™ is a full-array LED backlight technology that combines an ultra-dense LED structure, a spectacular					algorithm and a completely new optical design. Powered by the 4K HDR Processor™ X1 Extreme, this technology delivers					incredibly deep black, dazzling lights and more vibrant colour.&nbsp;",
                                    previewImage :"//sonyglobal.scene7.com/is/image/gwtprod/93abebedf98605e91d91881c4e04ed8f?fmt=jpeg",
                                }, {
                                    previewSubhead:"4K HDR Processor X1™ Extreme: So real you can feel it",
                                    previewDesc : "Made to enhance the latest generation of 4K HDR pictures, the 4K HDR Processor X1™ Extreme brings reality to every scene. With 40% more real-time image processing than our renowned 4K Processor X1™, it delivers unprecedented picture quality for everything you watch, upscaling content from any source nearer to 4K HDR quality.",
                                    previewImage :"//sonyglobal.scene7.com/is/image/gwtprod/a68eed5e04bbdbea2da587cc974cc161?fmt=jpeg",
                                }, {
                                    previewSubhead:"Uncover the detail with 4K HDR",
                                    previewDesc : "A High Dynamic Range (HDR) compatible TV will change the way you look at TV. Combined with 4K Ultra HD resolution, HDR video content delivers exceptional detail, colour and contrast, with a far wider range of brightness than other video formats. The result is the most lifelike picture that TV has ever been able to create, with brilliant highlights and fine detail.",
                                    previewImage :"//sonyglobal.scene7.com/is/image/gwtprod/4fd45e3ec09cede1cf537c428165c504?fmt=jpeg",
                                }]
                            }
                        ];
                        // alert();
                        // $scope.productsList = AppData.getCartItem(); 
                        // window.cartSlide.slides =$scope.productsList;
                        
                    }]//,
                    // controllerAs: "p1"
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
