'use strict';

describe('testing basic functions', function(){
    //Tests for GPA Calculator

    // load the controller's module
    beforeEach(module('mainApp'));

    var GPACtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        GPACtrl = $controller('GPACtrl as GPAController', {
            $scope: scope
        });
    }));

    it('test GPA Calculator accuracy', function() {
        console.log("THIS IS THE LINE YOU ARE LOOKING FOR " + scope.GPAController.calcGPA([{classname: "CSCI", grade: "A", credits: 4}]));
        expect(scope.GPAController.calcGPA([{classname: "CSCI", grade: "A", credits: 4}])).toEqual(4);
        expect(scope.GPAController.calcGPA([{classname: "CSCI", grade: "A", credits: 4}, {classname: "CSCI", grade: "A", credits: 4}])).toEqual(4);
        expect(scope.GPAController.calcGPA([{classname: "CSCI", grade: "B", credits: 5}, {classname: "CSCI", grade: "A", credits: 5},{classname: "CSCI", grade: "F", credits: 4}])).toEqual(2.5);
        expect(scope.GPAController.calcGPA([{classname: "GEOLOGY", grade: "B-", credits: 2}, {classname: "PHYSICS", grade: "A", credits: 5},{classname: "Biology", grade: "C+", credits: 3}])).toEqual(3.2329999999999997);
        expect(scope.GPAController.calcGPA([{classname: "MATH", grade: "C", credits: 5}, {classname: "CSCI", grade: "D+", credits: 5},{classname: "CSCI1301", grade: "D-", credits: 1}])).toEqual(1.5745454545454545);
        expect(scope.GPAController.calcGPA([{classname: "CSCI", grade: "F", credits: 5}, {classname: "CSCI", grade: "F", credits: 5},{classname: "CSCI", grade: "F", credits: 5}])).toEqual(0);
    });

});