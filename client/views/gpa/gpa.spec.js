'use strict';

describe('testing basic functions', function(){
    //Tests for GPA Calculator

    // load the controller's module
    beforeEach(module('appModule'));

    var GPACtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        GPACtrl = $controller('GPACtrl as GPAController', {
            $scope: scope
        });
    }));

    it('test GPA Calculator accuracy', function() {
        console.log("THIS IS THE LINE YOU ARE LOOKING FOR " + scope.GPAController.calcGPA([{classname: "CSCI", grade: "A", credits: "4"}]));
        expect(calcGPA([{classname: "CSCI", grade: "A", credits: "4"}])).toEqual(4);
        expect(calcGPA([{classname: "CSCI", grade: "A", credits: "4"}, {classname: "CSCI", grade: "A", credits: "4"}])).toEqual(4);
        expect(calcGPA([{classname: "CSCI", grade: "B", credits: "5"}, {classname: "CSCI", grade: "A", credits: "5"},{classname: "CSCI", grade: "F", credits: "4"}])).toEqual(2.5);
        expect(calcGPA([{classname: "GEOLOGY", grade: "B-", credits: "2"}, {classname: "PHYSICS", grade: "A", credits: "5"},{classname: "Biology", grade: "C+", credits: "3"}])).toEqual(3.2329999999999997);
        expect(calcGPA([{classname: "MATH", grade: "C", credits: "5"}, {classname: "CSCI", grade: "D+", credits: "5"},{classname: "CSCI1301", grade: "D-", credits: "1"}])).toEqual(1.5745454545454545);
        expect(calcGPA([{classname: "CSCI", grade: "F", credits: "5"}, {classname: "CSCI", grade: "F", credits: "5"},{classname: "CSCI", grade: "F", credits: "5"}])).toEqual(0);
    });

    var gradeLetterConverter = function(str){
        if (str == "A") {
            return 4.00;
        } else if(str == "A-"){
            return 3.67;
        } else if(str == "B+") {
            return 3.33;
        } else if(str == "B") {
            return 3.00;
        } else if(str == "B-") {
            return 2.67;
        } else if(str == "C+") {
            return 2.33;
        } else if(str == "C") {
            return 2.00;
        } else if(str == "C-") {
            return 1.67;
        } else if(str == "D+") {
            return 1.33;
        } else if(str == "D") {
            return 1.00;
        } else if(str == "D-") {
            return 0.67;
        } else if(str == "F") {
            return 0.00;
        } else {
            return "Error, invalid grade entry";
        }

    }

    var calcGPA = function(dataarray) {
        var creditCount = 0;
        var cumGrade = 0;
        console.log("The following is the length of data array supposedly being parsed: " + GPACtrl.data.length);
        dataarray.forEach(function(data){
            creditCount += parseInt(data.credits);
            console.log("Credit count: " + creditCount);
            cumGrade += parseInt(data.credits) * GPACtrl.gradeLetterConverter(data.grade);
            console.log("Cumulative grade: " + cumGrade);
        });
        console.log(cumGrade / creditCount);
        return cumGrade / creditCount;
    }

});