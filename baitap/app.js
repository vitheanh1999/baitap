var app = angular.module("myapp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/trangchu", {
            templateUrl: "trangchu.html"
        })
        .when("/dichvu", {
            templateUrl: "dichvu.html"
        })
        .when("/nganhang", {
            templateUrl: "nganhang.html"
        })
        .when("/tintuc", {
            templateUrl: "tintuc.html"
        })
        .when("/tintuc2", {
            templateUrl: "tintuc2.html"
        })
        .when("/lienhe", {
            templateUrl: "lienhe.html"
        })
        .otherwise({
            redirectTo: "/trangchu"
        })
});
app.controller("tintuc", ['$scope', '$http', function ($scope, $http) {
    $scope.new = [];
    $scope.init = function (page = 1) {
        if(page == 1){
            $scope.page1= true
            $scope.page2 = false
        }else{
            $scope.page2= true
            $scope.page1 = false
        }
      $http.get("json/tintuc.json").then(function(response) {
            $scope.new = response.data.slice((Number(page) - 1) * 3, Number(page) * 3);
        },
           );
        }
}]);
app.controller("menu", function ($scope, $http) {
    $http.get("json/menu.json").then(function (response) {
        $scope.menu = response.data;
        function checkValue(name){
            console.log('avc')
            console.log(name)
        }
    });
});
app.controller("khuyenmai", function ($scope, $http) {
    $http.get("json/khuyenmai.json").then(function (response) {
        $scope.km = response.data;
    });
});
app.controller("uudai", function ($scope, $http) {
    $http.get("json/uudai.json").then(function (response) {
        $scope.ud = response.data;
    });
});
app.controller("huongdan", function ($scope, $http) {
    $http.get("json/huongdan.json").then(function (response) {
        $scope.huongdan = response.data;
    });
});
