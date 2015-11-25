/**
 * Created by Lenovo on 17-11-2015.
 */
angular.module("internship").factory("logService", function(){

    // private attributes
    var debug = true;

    // public (when we use the logService)
    return {
       log: function(text, object) {
            if (debug){
               console.log(text);

               if (angular.isObject(object)) {
                   console.log(object);
               }
            }
       }
    }
});