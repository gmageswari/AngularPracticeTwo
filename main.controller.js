app.controller("practiceTwoController",function($scope){
    $scope.currencyArray = [
        {
            currencyName : "INR",
            currencySymbol : "₹",
            currencyValue : 1
        },
        {
            currencyName : "USD",
            currencySymbol : "$",
            currencyValue : 79.91
        },
        {
            currencyName : "Euro",
            currencySymbol : "€",
            currencyValue : 79.20
        },
        {
            currencyName : "JPY",
            currencySymbol : "¥",
            currencyValue : 0.56
        },
        {
            currencyName : "GBP",
            currencySymbol : "£",
            currencyValue : 90.60
        },
        {
            currencyName : "CAD",
            currencySymbol : "$",
            currencyValue : 59.71
        }
    ];
    
    $scope.convert = function(){
        $scope.result = ($scope.amt * $scope.currencyFrom) / $scope.currencyTo;
        $scope.symbol = $scope.currencyArray.filter((eachCurrency)=>{
            if(eachCurrency.currencyValue == $scope.currencyTo){
                return true;
            }
            
        });
        
        
    }
});