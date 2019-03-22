'use strict';

angular.module('peopleDetails').component('person', {
    bindings: { person: '<' },
    templateUrl: './people-details/people-details.template.html', 
});