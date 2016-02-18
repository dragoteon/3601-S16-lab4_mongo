'use strict';

console.log("index.js loaded!");

angular.module("appModule")
    .config(function($stateProvider){
        $stateProvider
            .state('gpa', {
                url: '/gpa',
                templateUrl: 'views/gpa/gpa.html',
                controller: 'GPACtrl',
                controllerAs: 'GPACtrl'
            });
    });