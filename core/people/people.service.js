'use strict';

angular.
  module('core.people').
  service('PeopleService', ['$http',
    function($http) {
      var service = {
        getAllPeople: function() {
          return $http.get('people/people.json', { cache: true }).then(function(resp) {
            return resp.data;
          });
        },
        
        getPerson: function(id) {
          function personMatchesParam(person) {
            return person.id === id;
          }
          
          return service.getAllPeople().then(function (people) {
            return people.find(personMatchesParam)
          });
        }
      }

      return service;
    }
]);