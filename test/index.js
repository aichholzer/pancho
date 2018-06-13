const nap = require('../lib');
const should = require('should');

it('Single value', (done) => {
  // Nap for one second
  nap(1).then((duration) => {
    // duration = duration of the nap, in milliseconds
    should(duration).equal(1000);
    done();
  });
});

it('Natural language', (done) => {
  // Nap for the given duration
  nap('1.2 seconds').then((duration) => {
    // duration = duration of the nap, in milliseconds
    should(duration).equal(1200);
    done();
  });
});

it('Natural language', (done) => {
  // Nap for the given duration
  nap('2.3 seconds').then((duration) => {
    // duration = duration of the nap, in milliseconds
    should(duration).equal(2300);
    done();
  });
});

it('Min and max values', (done) => {
  // Nap for a random time, between the given min and max values.
  nap(1, 3).then((duration) => {
    // duration = duration of the nap, in milliseconds
    should(duration).be.above(1000);
    done();
  });
});
