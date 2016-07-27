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

// Never prescribe weekly mileage lower than 3
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
  weeksAtMileage: weeksAtMileage,
  makeWeeksHuman: makeWeeksHuman
};
