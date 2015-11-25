
angular.module("internship").
    controller("topLevelController", ["$scope", "$http", "$resource", "testService", "logService", "$log", "internshipsService",
        function($scope, $http, $resource, testService, logService, $log, internshipsService) {

        console.log("Hello from topLevelController frank");

        $scope.products = [
            {name: "Apples", category: "Fruit", price: 1.2},
            {name: "Oranges", category: "Fruit", price: 2.1},
            {name: "Pineapples", category: "Fruit", price: 2.0}
        ];

        $scope.customers = [
            {firstName: "Frank", lastName: "Hansen", age: 44, salary: 100000},
            {firstName: "Viggo", lastName: "Mortensen", age: 50, salary: 200000},
            {firstName: "Louise", lastName: "Madsen", age: 35, salary: 150000}
        ];

        $log.debug("Hello from Angulars log service");

        var obj = {name: "Per"};
        $log.debug("Hello from Angulars log service", obj);

        //$scope.allInternships = testService.getInternships();

        // home cooked service
        testService.addToNumber(4);
        console.log("Number from testService: " + testService.get());

        //I can add .then(....) is that test() returns a promise
        testService.test().then(function(data) {
            //when promise is resolved
            //alert(data);
            $scope.internships = data;
        }, function(reason) {
            //if promise is rejected
            alert(reason);
        });

        //$scope.internshipResource = $resource("http://angularkea.azurewebsites.net/api/internships/:id",
        //    { id: "@id"},{ update: { method: 'PUT' }});
        //
        //$scope.internshipVisits = $scope.internshipResource.query();

        internshipsService.getInternships().then(function(data) {
            $scope.internshipVisits = data;
        }, function(error) {
            //handle error (eg. network is down).
            alert(error);
        });

        $scope.limitInternships = 100;
        $scope.limitShowInternships = [1, 5, 10, 15, 20, 100];



        $scope.saveData = function(){
            $scope.internshipVisits.$promise.then(function(response){
                // success
                console.log("from the promise");
                console.log(response);
            },
                // error
                function(err){
                    $log.error(err);
            });
        };

        logService.log("Test text with no object...");
        logService.log("Text here:", $scope.limitShowInternships);
    }
]);