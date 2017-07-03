var ISIPApp = angular.module("ISIPApp");
ISIPApp.controller("landingController", ["$state","$http", "AppData", function ($state, $http, AppData) {
    this.leftMenu = [
        {
        id: "1001",
        name: "Overview (current)"
    },{
        id: "1002",
        name: "Reports"
    },{
        id: "1003",
        name: "Analytics"
    },{
        id: "1004",
        name: "Export"
    },{
        id: "1005",
        name: "Nav item"
    },{
        id:'1006',
        name : "Nav item again"
    },{
        id:'1006',
        name : "One more nav"
    },{
        id:'1007',
        name : "Another nav item"
    },{
        id: '1008',
        name: 'More navigation'
    }];
    
    $http.get('json/SampleProduct.json').success(function(response) {
       /*      this.productsList = response;
            console.log(this.productsList )
              angular.forEach($scope.productsList, function(item){
                    //this.productsList.push(item);                
               }) */
    });     

    this.productsList = [
        {
            isInCart: false,
            image:'images/a9a1a4facfa90abf80b09ac5d1509de7.jpg',
            itemtype : "http://schema.org/Product",
            itemprop : "url",
            href     : "//www.sony.com/electronics/televisions/xbr-z9d-series",
            name     : "Z9D | LED | 4K Ultra HD | High Dynamic Range (HDR) | Smart TV (Android TV™)",
            model    : "XBR Z9D Series",
            topFeatures : [
                "4K HDR Processor X1 Extreme for ultimate realism",
                "Unprecedented contrast with Backlight Master Drive™",
                // "Amazing contrast with X-tended Dynamic Range PRO",
                // "Wide color gamut with TRILUMINOS Display",
            ],
            price   : "$5,499.99"
        },
        {
            isInCart: false,
            image:'images/a9a1a4facfa90abf80b09ac5d1509de7.jpg',
            itemtype : "http://schema.org/Product",
            itemprop : "url",
            href     : "//www.sony.com/electronics/televisions/xbr-z9d-series",
            name     : "Z9D | LED | 4K Ultra HD | High Dynamic Range (HDR) | Smart TV (Android TV™)",
            model    : "XBR Z9D Series",
            topFeatures : [
                "4K HDR Processor X1 Extreme for ultimate realism",
                // "Unprecedented contrast with Backlight Master Drive™",
                // "Amazing contrast with X-tended Dynamic Range PRO",
                // "Wide color gamut with TRILUMINOS Display",
            ],
            price   : "$5,499.99"
        },
        {
            isInCart: false,
            image:'images/a9a1a4facfa90abf80b09ac5d1509de7.jpg',
            itemtype : "http://schema.org/Product",
            itemprop : "url",
            href     : "//www.sony.com/electronics/televisions/xbr-z9d-series",
            name     : "Z9D | LED | 4K Ultra HD | High Dynamic Range (HDR) | Smart TV (Android TV™)",
            model    : "XBR Z9D Series",
            topFeatures : [
                "4K HDR Processor X1 Extreme for ultimate realism",
                "Unprecedented contrast with Backlight Master Drive™",
                "Amazing contrast with X-tended Dynamic Range PRO",
                "Wide color gamut with TRILUMINOS Display",
            ],
            price   : "$5,499.99"
        }
    ];

    this.searchWord = "";

    this.searchByQ = function(){
        alert();
        $state.go("landing.search", {q:this.searchWord});
    }.bind(this);
    
    this.pushCartItem = AppData.pushCartItem;
    // this.getCartItem  = AppData.getCartItem;

}]);