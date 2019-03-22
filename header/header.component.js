'use strict';

angular.module('header').component('headerComponent', {
    templateUrl: './header/header.template.html',
    bindings: {
        view: '<',
        onViewChange: '&',
        text: '<'
    },
    controller: function() {
        this.setView = function(view) {
            this.view = view;
            this.onViewChange({$event: {view: view}})
        }
    }
});