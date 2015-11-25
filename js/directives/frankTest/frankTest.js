/**
 * Created by Lenovo on 24-11-2015.
 */
angular.module('internship').directive('frankTest', function(){
   return {
       link: function(scope, element, attrs){
           var data = scope[attrs['frankTest']];
           var propertyName = attrs['listProperty'];
           scope.data2 = data;

           for (var i = 0; i < data.length; i++){
               console.log(data[i][propertyName]);
           }
       },
       templateUrl: 'js/directives/frankTest/showCustomers.html',
       restrict: "AE",
       replace: true // replace is used to change the css or style on the element using the directive
   }
});