'use strict';

angular.module("appModule")
    .controller('mainCtrl', function($http){
        console.log("main controller loaded!");

        var self = this;

        self.textField = "";
        self.weightField = "";
        self.Heaviest = {};

        // Normally, data like this would be stored in a database, and this controller would issue an http:get request for it.
        self.data = [];

        self.getPets = function(){
            $http.get('api/pets').success(function(pets) {
                self.data = pets;
                self.Heaviest = self.getLargest();
            });
        };

        self.getPets();

        self.getLargest = function() {
            return self.data.sort(function(x, y) {
                parseFloat(y.weight) - parseFloat(x.weight);
            })[0];
        };


        self.addData = function(){
            if(self.textField.length >= 1) {
                $http.post('api/pets', {text: self.textField, weight: self.weightField}).success(function(){
                    self.getPets();
                    self.Heaviest = self.getLargest();
                });
                self.textField = "";
                self.weightField = "";
            }
        };

        self.removeData = function(index){
            $http.delete('/api/pets/' + self.data[index]._id).success(function(){
                self.getPets();
                self.Heaviest = self.getLargest();
            });
        };

        self.cat = function(str1, str2){
            return str1 + str2;
        };

        self.itemsInList = function(){
            return self.data.length;
        };

    });