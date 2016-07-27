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

