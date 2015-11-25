
angular.module("internship").
    controller("allInternshipsController", function($scope, $state) {


        $scope.editInternship = function(visit) {
          // {internship: visit } a visit object that is named internship is passed as parameter to the
          // "new-internship" state in the navigation.js
            $state.go("new-internship", {internship: visit});
        };

        console.log("hello from allInternshipsController frank");
    });
