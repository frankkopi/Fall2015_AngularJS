
angular.module("internship").
    controller("internshipDataEntryController", function($scope, $state, $stateParams, internshipsService) {

        $scope.visit = $stateParams.internship;

        // deleteVisit using $resource
        $scope.deleteVisit = function(){

            internshipsService.deleteInternship($scope.visit).then(function(){
                    $scope.internshipVisits.splice($scope.internshipVisits.indexOf($scope.visit), 1);
                    $state.go("all-internships");
            });
        };


        // saveVisit using $resource
        $scope.saveVisit = function()
        {
            if ($scope.visitForm.$valid)
            {
                if (!$stateParams.internship)
                {
                    // call API and save a new internship
                    internshipsService.addInternship($scope.visit).
                        then(function(newInternshipBackFromServer){
                                $scope.internshipVisits.push(newInternshipBackFromServer);
                                $state.go("all-internships");

                    }, function(reason) {
                        //if promise is rejected
                        alert(reason);
                    });
                }
                else
                {
                    // call API and update an existing internship
                    internshipsService.updateInternship($scope.visit).then(function(){
                            $state.go("all-internships");
                        });
                }

            }
            else
            {
                // display error message
                alert("Form is not valid");
            }
        };


});





//$scope.visit = $stateParams.internship;
//
//// deleteVisit using $resource
//$scope.deleteVisit = function(){
//    $scope.visit.$delete({id: $scope.visit._id}).then(function () {
//        $scope.internshipVisits.splice($scope.internshipVisits.indexOf($scope.visit), 1);
//        $state.go("all-internships");
//        console.log("from the deleteVisit")
//    });
//};
//
//
//// saveVisit using $resource
//$scope.saveVisit = function()
//{
//    if ($scope.visitForm.$valid)
//    {
//        if (!$stateParams.internship){
//            $scope.saveANewInternship()
//        }
//        else
//        {
//            $scope.updateAnExistingInternship()
//        }
//
//    }
//    else
//    {
//        // display error message
//    }
//};
//
//
//$scope.saveANewInternship = function(){
//    new $scope.internshipResource($scope.visit).$save(function (internship) {
//        $scope.visit._id = internship._id;
//
//        $scope.internshipVisits.push($scope.visit);
//        $state.go("all-internships");
//        console.log("from the saveANewInternship");
//    });
//};
//
//
//$scope.updateAnExistingInternship = function(){
//    //update example
//    new $scope.internshipResource($scope.visit).$update(
//        {id: $scope.visit._id},
//        function() {
//            $state.go("all-internships");
//        });
//    console.log("from the updateAnExistingInternship")
//};

