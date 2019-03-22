'use strict';

angular.module('peopleList')
  .component('people', {
    templateUrl: './people-list/people-list.template.html', 
    bindings: { 
      people: '<',
      view: '<',
      text: '<'
    }
})