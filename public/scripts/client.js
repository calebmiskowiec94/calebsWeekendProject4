console.log('js');

var app = angular.module('TableApp', []);

app.controller('TableController', ['$http', function ($http) {
    console.log('Table Controller loaded');
    var self = this;
    self.employees = [];
    self.newEmployee = {};

   self.postNewEmployee = function(){
       console.log("New Employee", self.newEmployee);
        $http({
             method: 'POST',
             url: '/table',
             data: self.newEmployee             
         }).then(function (response) {
             console.log(response);
             self.getTable();
         }); // end of $http
     }; // end of getMessages

    
  
    self.getTable = function () {
        $http({
            method: 'GET',
            url: '/table'
        }).then(function(response) {
            // console.log(response.data);
            self.employees = response.data;
        })  //then end
    } // getpets end

self.getTable();

}])