
angular.module("internship").config(
    function($stateProvider, $urlRouterProvider, $logProvider) {

        $logProvider.debugEnabled(false);

        $urlRouterProvider.otherwise("all-internships"); // som default: kaldes et state som hedder "all-internship"

        $stateProvider.state("all-internships", {  // her defineres et state som hedder "all-internships"
            url: "/all-internships",                       // brug denne url til at loade "all-internships" state
            templateUrl: "partials/all-internships.html",  // brug denne template
            controller: "allInternshipsController"         // brug denne controller
        })
        .state("all-internships.subview1", {
            url: "/subview1",
            templateUrl: "partials/subview1.html"
        })
        .state("all-internships.subview2", {
            url: "/subview2",
            templateUrl: "partials/subview2.html"
        });

        $stateProvider.state("new-internship", {         // her defineres et state som hedder "new-internship"
            url: "/new-internship",                      // brug denne url til at loade "new-internship" state
            templateUrl: "partials/form-input.html",     // brug denne template
            controller: "internshipDataEntryController", // brug denne controller
            params: { internship: null }                 //passing a variable called internship with value, or a variable called internship with null if it is not defined
        });

});