Calculator to help runners increase their weekly base mileage in a 
consistent fashion. As mileage increases, the time spent at each
training milestone increases as well.

Sample estimates with the current formula:

* 0 to 20 miles = 4 months
* 0 to 40 miles = 11 months
* 0 to 100 miles = 3.2 years

This calculator is for *entertainment purposes only*. Consult your
doctor before starting any sort of training plan.

## Usage

    var Training = require('base-building');

    // How long do I train at 3 miles per week (mpw) before upping my mileage?
    Training.makeWeeksHuman(
      Training.weeksAtMileage(3).weeksAtThisLevel
    );

    // I've been training at 10 miles mpw, what should my new mileage be?
    Training.weeksAtMileage(10).milesAtNextLevel;

    // How long will it take me to go from 10 mpw to 40 mpw?
    Training.makeWeeksHuman(
      Training.weeksToGoal(10, 40)
    );
