var ISIPApp = angular.module("ISIPApp");

ISIPApp.service("AppData", ["$timeout","$http", function($timeout, $http){
    var productsList = {};
    var cartItem = [];
    var jsonList = {
        "101":["KD-65X9300E","KD-65Z9D", "KD-75X9400D", "KD-85X8500D", "KDL-43W800D", "KLV-24P423D","KLV-32R412D", "KLV-43W752D", "KLV-48W562D", "KLV-49W672E"],
        "102":["dsc-hx400v-ce32", "dsc-rx1rm2-e32", "dsc-wx500-wce32", "ilca-68m-bq-in5", "ilca-77m2m-ap2", "ilca-99m2-qap2", "ilce-7rm2-bqap2", "ilce-7sm2-bqin5", "ilce-6000y-bap2", "ilce-6300l-bin5", "ilce-6500-bqin5"]
    };
    var jsonFiles = {
        "101": "TV",
        "102": "Camera"
    }
    function setProductsList(){
        angular.forEach(jsonList, function(products, id){
            productsList[id] = [];
            angular.forEach(products, function(value, key){
                $http.get('json/'+jsonFiles[id]+'/'+value+'.json').then(function(response) {
                    response.data.isInCart = false;
                    productsList[id].push(response.data);
                });
            });
        });
    }

    function getProductsList(navTabId){
        return productsList[navTabId];
    }

    function pushCartItem(item){
        cartItem.push(item);
    }

    function getCartItem(){
        return cartItem;
    }

    function deleteCartItem(index, item){
        item.isInCart = false;
        cartItem.splice(index, 1);
    }
    
    function deleteAllCartItem(){
        cartItem.splice(0, cartItem.length);
        setProductsList();
    }

    this.pushCartItem = pushCartItem;
    this.getCartItem  = getCartItem;
    this.deleteCartItem = deleteCartItem;
    this.deleteAllCartItem = deleteAllCartItem;
    this.setProductsList = setProductsList;
    this.getProductsList = getProductsList;
}]);