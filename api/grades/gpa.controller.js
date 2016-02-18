'use strict';

var mongoose = require('mongoose');

// Defining Model
// =====================================================

var Grade = mongoose.model('Grade', {
    course: 'string',
    grade: 'string',
    credits: 'string'
});



// Defining Routes
// =====================================================

exports.index = function(req, res) {
    Grade.find(function (err, grades) {
        if (err) {
            console.log("Error getting data from database");
            res.send(err)
        } else {
            res.json(grades); // return results
        }
    });
};

exports.create = function(req, res) {
    Grade.create(req.body, function (err, grade) {
        if (err) {
            res.send(err);
        } else {
            Grade.find(function (err, grades) {
                if (err) {
                    res.send(err);
                }

                res.json(grades);
            });
        }
    });
};

exports.destroy = function(req, res) {
    Grade.findById(req.params.grade_id, function(err, grade){
        if(err) { res.send(err); return "error: " + err; }
        if(!grade) { return res.sendStatus(404); }

        grade.remove(function(err){
            if(err) { return "error: " + err}
            return res.sendStatus(204);
        });
    });
};