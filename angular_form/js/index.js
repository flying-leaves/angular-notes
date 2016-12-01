/*
 * Created by Administrator on 2016/10/29 0029.
 */
    angular.module('all',[])
    .controller('signUp',function ($scope) {
        $scope.userData={

        };
        $scope.submitForm = function () {
            console.log($scope.userData);
            return  $scope.userData;
        }
    })
        // 自定义一个服务,进行数据对比
    .directive('compare',function () {
        var o = {};
        o.strict ='AE';//angular基础 作用于元素和属性??????
        o.scope = {
            orgText:'=compare'//pas输入内容
        };
        o.require = 'ngModel';
        o.link = function (sco,ele,att,con) {
            con.$validators.compare = function (val) {
                //val pas2输入内容,
                return val == sco.orgText;
            };
            sco.$watch('orgText',function () {
                con.$validate(); //变化就验证是否相等
            })
        };
        return o;
    })