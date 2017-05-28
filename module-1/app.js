// (function () {
// 'use strict';
//
// angular.module('LunchCheck', [])
// .controller('LunchCheckController', LunchCheckController);
//
// LunchCheckController.$inject = ['$scope'];
// function LunchCheckController($scope) {
//   $scope.dishName = "";
//
//   $scope.sayMessage = function () {
//     var dishes=$scope.dishName;
//     var spliter=','
//     var dishNames=dishes.split(spliter);
//     console.log(dishNames.length);
//   if (angular.equals(dishes,"")) {
//       $scope.message=  "Please enter data first";
//       $scope.style={'border-color':'red'}
//       $scope.mystyle={'color':'red'}
//     }
//   else{
//       $scope.style={'border-color':'none'}
//       $scope.mystyle={'color':'#69F0AE'}
//     if (dishNames.length<=3) {
//       $scope.message= "Enjoy!";
//     }
//   else {
//     $scope.message="too much!!!"
//      }
//    }
//   };
//
// }
//
// })();
!function(){"use strict";function e(e){
e.dishName="",e.sayMessage=function(){
var o=e.dishName,s=",",l=o.split(s);
console.log(l.length),angular.equals(o,"")?(e.message="Please enter data first",e.style={"border-color":"red"},e.mystyle={color:"red"}):(e.style={"border-color":"none"},e.mystyle={color:"#69F0AE"},l.length<=3?e.message="Enjoy!":e.message="too much!!!")}}
angular.module("LunchCheck",[]).controller("LunchCheckController",e),e.$inject=["$scope"]}();
