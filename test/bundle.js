(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Convert weeks to a more appropriate timescale
function makeWeeksHuman(weeks) {
  if (Math.round(weeks) === 1) {
    return '1 week';
  }
  if (weeks < 13.035) {
    return Math.round(weeks) + ' weeks';
  }
  else if (weeks < 52) {
    return Math.round(weeks / 4.345) + ' months';
  }
  else {
    return Math.round(10 * weeks / 52) / 10 + ' years';
  }
}

// Calculate the number of miles to run during a specific week of
// a training level
function mileageAtWeek(week, startingMileage) {

  // Subtract one from the week to make it zero-based
  var mod = (week - 1) % 5;

  if (mod === 0) {
    return startingMileage;
  }
  else if (mod === 1) {
    return startingMileage * 0.90;
  }
  else if (mod === 2) {
    return startingMileage * 0.85;
  }
  else if (mod === 3) {
    return startingMileage * 0.90;
  }
  else if (mod === 4) {
    return startingMileage;
  }
}

// How many weeks to train at a given mileage before adding more?
function weeksAtMileage(currentMileage) {
  var func;

  // Find the right training level for the current mileage
  if (currentMileage < 3) { func = lessThan3; }
  else if (currentMileage < 10) { func = lessThan10; }
  else if (currentMileage < 20) { func = lessThan20; }
  else { func = moreThan20; }

  // Simulate the current training level
  return func(currentMileage);
}

// Given a starting and ending mileage, calculate training time
function weeksToGoal(currentMileage, goalMileage) {
  var weekCount = 0;

  while (currentMileage < goalMileage) {

    // Simulate the current training level
    var state = weeksAtMileage(currentMileage);
    weekCount += state.weeksAtThisLevel;
    currentMileage = state.milesAtNextLevel;
  }

  return weekCount;
}

// Never prescribe weekly mileage lower than 3 mpw
function lessThan3(currentMileage) {
  return {
    milesAtNextLevel: 3,
    weeksAtThisLevel: 1
  };
}

// Increase weekly mileage by 1 until hitting 10 mpw
function lessThan10(currentMileage) {
  return {
    milesAtNextLevel: currentMileage + 1,
    weeksAtThisLevel: 1
  };
}

// Increase weekly mileage by 10% per week until hitting 20 mpw
function lessThan20(currentMileage) {
  return {
    milesAtNextLevel: currentMileage * 1.1,
    weeksAtThisLevel: 1
  };
}

// Increase weekly mileage at increasingly slow intervals after 20 mpw
function moreThan20(currentMileage) {
  return {
    milesAtNextLevel: currentMileage * 1.1,
    weeksAtThisLevel: 9.32002 * Math.log(0.0556632 * currentMileage)
  };
}

module.exports = {
  weeksToGoal: weeksToGoal,
  mileageAtWeek: mileageAtWeek,
  weeksAtMileage: weeksAtMileage,
  makeWeeksHuman: makeWeeksHuman
};

},{}],2:[function(require,module,exports){
var Training = require('../index');

QUnit.test('How long at 2 miles per week?', function(assert) {
  var duration = Training.makeWeeksHuman(
    Training.weeksAtMileage(2).weeksAtThisLevel
  );
  assert.equal(duration, '1 week', 'Passed!');
});

QUnit.test('How long at 3 miles per week?', function(assert) {
  var duration = Training.makeWeeksHuman(
    Training.weeksAtMileage(3).weeksAtThisLevel
  );
  assert.equal(duration, '1 week', 'Passed!');
});

QUnit.test('How long at 10 miles per week?', function(assert) {
  var duration = Training.makeWeeksHuman(
    Training.weeksAtMileage(10).weeksAtThisLevel
  );
  assert.equal(duration, '1 week', 'Passed!');
});

QUnit.test('How long at 20 miles per week?', function(assert) {
  var duration = Training.makeWeeksHuman(
    Training.weeksAtMileage(20).weeksAtThisLevel
  );
  assert.equal(duration, '1 week', 'Passed!');
});

QUnit.test('How long at 30 miles per week?', function(assert) {
  var duration = Training.makeWeeksHuman(
    Training.weeksAtMileage(30).weeksAtThisLevel
  );
  assert.equal(duration, '5 weeks', 'Passed!');
});

QUnit.test('How long at 40 miles per week?', function(assert) {
  var duration = Training.makeWeeksHuman(
    Training.weeksAtMileage(40).weeksAtThisLevel
  );
  assert.equal(duration, '7 weeks', 'Passed!');
});

QUnit.test('How long at 50 miles per week?', function(assert) {
  var duration = Training.makeWeeksHuman(
    Training.weeksAtMileage(50).weeksAtThisLevel
  );
  assert.equal(duration, '10 weeks', 'Passed!');
});

QUnit.test('How long at 60 miles per week?', function(assert) {
  var duration = Training.makeWeeksHuman(
    Training.weeksAtMileage(60).weeksAtThisLevel
  );
  assert.equal(duration, '11 weeks', 'Passed!');
});

QUnit.test('How long at 70 miles per week?', function(assert) {
  var duration = Training.makeWeeksHuman(
    Training.weeksAtMileage(70).weeksAtThisLevel
  );
  assert.equal(duration, '13 weeks', 'Passed!');
});

QUnit.test('How long at 80 miles per week?', function(assert) {
  var duration = Training.makeWeeksHuman(
    Training.weeksAtMileage(80).weeksAtThisLevel
  );
  assert.equal(duration, '3 months', 'Passed!');
});

QUnit.test('How long at 90 miles per week?', function(assert) {
  var duration = Training.makeWeeksHuman(
    Training.weeksAtMileage(90).weeksAtThisLevel
  );
  assert.equal(duration, '3 months', 'Passed!');
});

QUnit.test('How long at 100 miles per week?', function(assert) {
  var duration = Training.makeWeeksHuman(
    Training.weeksAtMileage(100).weeksAtThisLevel
  );
  assert.equal(duration, '4 months', 'Passed!');
});

QUnit.test('How long to train from 0-100 miles per week?', function(assert) {
  var duration = Training.makeWeeksHuman(
    Training.weeksToGoal(0, 100)
  );
  assert.equal(duration, '3.2 years', 'Passed!');
});

QUnit.test('How long to train from 0-75 miles per week?', function(assert) {
  var duration = Training.makeWeeksHuman(
    Training.weeksToGoal(0, 75)
  );
  assert.equal(duration, '2.3 years', 'Passed!');
});

QUnit.test('How long to train from 0-50 miles per week?', function(assert) {
  var duration = Training.makeWeeksHuman(
    Training.weeksToGoal(0, 50)
  );
  assert.equal(duration, '1.2 years', 'Passed!');
});

QUnit.test('How long to train from 0-25 miles per week?', function(assert) {
  var duration = Training.makeWeeksHuman(
    Training.weeksToGoal(0, 25)
  );
  assert.equal(duration, '5 months', 'Passed!');
});

QUnit.test('How long to train from 25-50 miles per week?', function(assert) {
  var duration = Training.makeWeeksHuman(
    Training.weeksToGoal(25, 50)
  );
  assert.equal(duration, '11 months', 'Passed!');
});

QUnit.test('How long to train from 50-75 miles per week?', function(assert) {
  var duration = Training.makeWeeksHuman(
    Training.weeksToGoal(50, 75)
  );
  assert.equal(duration, '1.1 years', 'Passed!');
});

QUnit.test('What mileage at week 1 of 80 miles per week?', function(assert) {
  var mileage = Training.mileageAtWeek(1, 80);
  assert.equal(mileage, 80);
});

QUnit.test('What mileage at week 2 of 80 miles per week?', function(assert) {
  var mileage = Training.mileageAtWeek(2, 80);
  assert.equal(mileage, 72);
});

QUnit.test('What mileage at week 3 of 80 miles per week?', function(assert) {
  var mileage = Training.mileageAtWeek(3, 80);
  assert.equal(mileage, 68);
});

QUnit.test('What mileage at week 4 of 80 miles per week?', function(assert) {
  var mileage = Training.mileageAtWeek(4, 80);
  assert.equal(mileage, 72);
});

QUnit.test('What mileage at week 5 of 80 miles per week?', function(assert) {
  var mileage = Training.mileageAtWeek(5, 80);
  assert.equal(mileage, 80);
});

QUnit.test('What mileage at week 6 of 80 miles per week?', function(assert) {
  var mileage = Training.mileageAtWeek(6, 80);
  assert.equal(mileage, 80);
});

},{"../index":1}]},{},[2]);
