/**
 * Created by Lenovo on 24-11-2015.
 */
angular.module("internship").factory("internshipsService", function($q, $resource) {
    //private attributes
    var internships = [];

    //var internshipResource...
    //use the initilization of resource (look in controller).
    var internshipResource = $resource("http://angularkea.azurewebsites.net/api/internships/:id",
        { id: "@id"},{ update: { method: 'PUT' }});

    return {

        test: function() { //illustrate $q service and working with promises.
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
        },

        getInternships: function() {
            var deferred = $q.defer();

            if (internshipResource.query()) {
                internshipResource.query(function(dataFromServer){
                    internships = dataFromServer;

                    console.log("resolve was called from getInternships()");
                    deferred.resolve(internships);
                })
            }
            else {
                deferred.reject("data was not returned from server, something bad happened");
            }

            return deferred.promise;
        },

        addInternship: function(internship) {
            //call the api to save internship //if success, add it to the local array.
            var deferred = $q.defer();

            if (internship){
                new internshipResource(internship).$save(function (dataFromServer) {
                    internship._id = dataFromServer._id;

                    console.log("resolve was called from addInternship()");
                    deferred.resolve();
                });
            }
            else {
                deferred.reject("data was not added to the from server, something bad happened");
            }
            return deferred.promise;
        },

        updateInternship: function(internship) {
            var deferred = $q.defer();

            if (internship){
                new internshipResource(internship).$update(
                    {id: internship._id},
                    function(dataFromServer){
                        console.log("resolve was called from updateInternship()");
                        deferred.resolve(dataFromServer);
                });
            }
            else {
                deferred.reject("data was not updated on the server, something bad happened");
            }
            return deferred.promise;
        },

        deleteInternship: function(internship) {
            var deferred = $q.defer();

            if (internship){
                new internshipResource(internship).$delete({id: internship._id}, function(dataFromServer){
                    console.log("resolve was called from deleteInternship");
                    deferred.resolve();
                })
            }
            else {
                deferred.reject("data was not deleted from server, something bad happened");
            }
            return deferred.promise;

        }
    }
});
