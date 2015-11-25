/**
 * Created by Lenovo on 24-11-2015.
 */
angular.module('internship').directive('unorderedList', function(){
   return {
       link: function(scope, element, attrs){
           var data = scope[attrs["unorderedList"]];
           var propertyName = attrs["listProperty"];
           scope.data = data;

           for (var i=0; i < data.length; i++) {
               console.log(data[i][propertyName]);
           }
       },
       templateUrl: 'js/directives/unorderedList/tableTemplate.html',
       restrict: "AE", //E: Element, A: Attribute
       replace: true
   }

});

// scope can be: shared with the controllers $scope (this is default)
//               Inherited from the controllers $scope
//               local to the directive
