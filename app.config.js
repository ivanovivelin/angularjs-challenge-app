'use strict';

angular.
  module('challengeApp').
  config( function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/people');
        $stateProvider
            .state('people', {
                url: '/people',
                component: 'people',
                resolve: {
                    people: function(PeopleService) {
                      return PeopleService.getAllPeople();
                    }
                }
            })
            .state('login', {
                url: '/login',
            })
            .state('people.person', {
                name: 'people.person', 
                url: '/{personId}', 
                component: 'person',
                resolve: {
                  person: function(people, $stateParams) {
                    return people.find(function(person) { 
                      return person.id === $stateParams.personId;
                    });
                  }
                }
            })
            .state('home', {
                url: '/home',
            });
});