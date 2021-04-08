const { nextISSTimesForMyLocation } = require('./iss');


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});

const printPassTimes = function(times) {
  for (let i of times) {
    let date = new Date(i.risetime * 1000);
    console.log(`Next pass at ${date} for ${i.duration} seconds`);
  }
};