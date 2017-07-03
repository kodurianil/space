var ISIPApp = angular.module("ISIPApp");
ISIPApp.controller("rightInfoController", ["$stateParams", "$timeout","AppData", function($stateParams, $timeout, AppData){

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

    this.pushCartItem = AppData.pushCartItem;
}]);