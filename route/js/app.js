/**
 * Created by Administrator on 2016/11/1 0001.
 */
angular.module('myApp',['ngRoute','controllerModule','serviceModule'])
    .config(['$routeProvider',function ($routeProvider) {
        $routeProvider
            .when('/list',{
                templateUrl:'template/list.html'
                // controller:'listCtrl'
            })
            .when('/detail/:id',{
                templateUrl:'template/detail.html',
                controller:'detailCtrl'
            })
            .otherwise('/list')
    }])
