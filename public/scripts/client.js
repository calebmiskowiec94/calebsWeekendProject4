console.log('js');

var app = angular.module('TableApp', []);

app.controller('TableController', ['$http', function ($http) {
    console.log('Table Controller loaded');
    var self = this;

    //self.names = [];

    //self.getOwners = function () {
        //$http({
           // method: 'GET',
           // url: '/owners'
       // }).then(function(response) {
          //  console.log(response.data);
          //  self.names = response.data;
       // })  //then end
  //  } // getOwners end


    //self.getOwners();

    self.employees=[];
    self.getTable = function () {
        $http({
            method: 'GET',
            url: '/table'
        }).then(function(response) {
            console.log('response.data');
            self.employees = response.data;
        })  //then end
    } // getpets end

self.getTable();

}])