const workoutRoutines = require('../schemas/workoutRoutines.js');

exports.routines = (req, res) => {
    workoutRoutines.find({}, function(err, routines) {
        res.status(200).json(routines);
    });
}
