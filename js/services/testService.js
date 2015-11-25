/**
 * Created by christiankirschberg on 17/11/15.
 */

angular.module("internship").factory("testService", function($q) {
        //private attributes
        var number = 0;

        return {

            //public (when we use the testService)
            get: function() {
                return number;
            },
            addToNumber: function(numberToAdd) {
                number += numberToAdd;
            },
            test: function() { //illustrate $q service and working with
                //promises.
                var deferred = $q.defer();

                if (number > 2) { //this could be a call to an api.
                    //everything went well
                    deferred.resolve("Everything went well");
                    //could also be an object from the server in the "success" function
                }
                else {
                    //something bad happened
                    deferred.reject("something bad happened");
                }
                return deferred.promise;
            }
        }
    });