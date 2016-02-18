'use strict';

angular.module("appModule")
    .controller('GPACtrl', function($http){
        var GPACtrl = this;
        console.log("gpa controller loaded.");

        GPACtrl.textField = "";
        GPACtrl.gradeField = "";
        GPACtrl.creditField = "";

        GPACtrl.currentGPA = 3.0;

        var classObject = {
            classname:"",
            grade:"",
            credits:""
        };

        GPACtrl.data = [

        ];

        GPACtrl.getGrades = function(){
            $http.get('api/grades').success(function(grades) {
                GPACtrl.data = grades;
            });
        };

        GPACtrl.getGrades();

        GPACtrl.addData = function(){
            console.log(GPACtrl.textField);

            if (GPACtrl.gradeField != "A" && GPACtrl.gradeField != "A-" && GPACtrl.gradeField != "B+" && GPACtrl.gradeField != "B" && GPACtrl.gradeField != "B-"
                && GPACtrl.gradeField != "C+" && GPACtrl.gradeField != "C" && GPACtrl.gradeField != "C-" && GPACtrl.gradeField != "D+"
                && GPACtrl.gradeField != "D" && GPACtrl.gradeField != "D-" && GPACtrl.gradeField != "F") {
                alert("Please select a valid grade from the drop down menu!");
                return;
            }

            if (isNaN(parseInt(GPACtrl.creditField))) {
                alert("Please enter a valid credit value!");
                return;
            }

            if(GPACtrl.textField.length < 1 || GPACtrl.gradeField.length < 1 || GPACtrl.creditField.length < 1) {
                alert("Please fill all fields!");
                return;
            }

            if(GPACtrl.textField.length >= 1 && GPACtrl.gradeField.length >= 1 && GPACtrl.creditField.length >= 1) {
                //GPACtrl.data.push({classname: GPACtrl.textField, grade: GPACtrl.gradeField, credits: GPACtrl.creditField});
                $http.post('api/grades', {course: GPACtrl.textField, grade: GPACtrl.gradeField, credits: GPACtrl.creditField})
                GPACtrl.textField = "";
                GPACtrl.gradeField = "";
                GPACtrl.creditField = "";
            }

            GPACtrl.getGrades();
            GPACtrl.currentGPA = GPACtrl.calcGPA(GPACtrl.data);

        };

        GPACtrl.removeData = function(index){

            $http.delete('/api/grades/' + GPACtrl.data[index]._id).success(function(){
                GPACtrl.getGrades();
            });

        };

        GPACtrl.itemsInList = function(){
            return GPACtrl.data.length;
        };

        GPACtrl.gradeLetterConverter = function(str){
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

        GPACtrl.calcGPA = function() {
            var creditCount = 0;
            var cumGrade = 0;
            console.log("The following is the length of data array supposedly being parsed: " + GPACtrl.data.length);
            GPACtrl.data.forEach(function(data){
                creditCount += parseInt(data.credits);
                console.log("Credit count: " + creditCount);
                cumGrade += parseInt(data.credits) * GPACtrl.gradeLetterConverter(data.grade);
                console.log("Cumulative grade: " + cumGrade);
            });
            console.log(cumGrade / creditCount);
            return cumGrade / creditCount;
        }
    });