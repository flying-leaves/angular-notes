/**
 * Created by Administrator on 2016/11/1 0001.
 */
angular.module('serviceModule',[])
    .service('mySearch',['$scope','$http',function ($scope,$http) {
        return {
            taobaoSearch:function (text) {

                //https://suggest.taobao.com/sug?&q=aaa&callback=JSON_CALLBACK
                $http.jsonp('https://suggest.taobao.com/sug',{
                    'params':{
                        'q':text,
                        'callback':'JSON_CALLBACK'
                    }
                }).then(function (res) {
                    console.log(res);
                },function (error) {
                    console.log(error)
                })

            }
        }
    }])