/**
 * Created by Administrator on 2016/11/1 0001.
 */
angular.module('controllerModule',[])

    .controller('myController',['$scope',function ($scope) {
        $scope.listData = [
            {
                pic:'img/01.jpg',
                name:'商品1',
                price:'11',
                id:1
            },
            {
                pic:'img/02.jpg',
                name:'商品2',
                price:'22',
                id:2
            },
            {
                pic:'img/03.jpg',
                name:'商品3',
                price:'33',
                id:3
            }
        ];
    }])

    .controller('detailCtrl',['$scope','$routeParams',function ($scope,$routeParams) {
        angular.forEach($scope.listData,function (val,idx) {
            if (val.id == $routeParams.id){
                $scope.data = val;
            }
        });
    }])
    .controller('searchCtrl',['$scope','mySearch',function ($scope,mySearch) {
        $scope.searchFun = function () {
            mySearch.taobaoSearch($scope.search)
        }
    }])