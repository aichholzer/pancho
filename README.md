# pancho

[![Greenkeeper badge](https://badges.greenkeeper.io/aichholzer/pancho.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/aichholzer/pancho.svg?branch=master)](https://travis-ci.org/aichholzer/pancho)
[![Downloads](https://img.shields.io/npm/dt/pancho.svg)](https://www.npmjs.com/package/pancho)

Your applications also deserve a nap.


### Install
```
npm i pancho
```


### Use

`pancho` returns a promise, making it easy to control your program's flow after "waking up".<br />
`pancho` takes arguments in the form of:

 - pancho(`int`) - Sleep for `int` seconds,
 - pancho(`int`, `int`) - Sleep for a random amount of seconds, defined by (`min`, `max`),
 - pancho('`natural language`') - Sleep for the specified time.

```
const nap = require('pancho');

nap(1).then(duration => {
    // Your program slept for 1 second.
    // duration = Duration of the nap, in milliseconds.
});

nap(1, 3).then(duration => {
    // Your program slept for a random amount of seconds (between 1 and 3).
    // duration = Duration of the nap, in milliseconds.
});

nap('3.5 seconds').then(duration => {
    // Your program slept for 3.5 seconds.
    // duration = Duration of the nap, in milliseconds.
});

nap('5 minutes').then(duration => {
    // Your program slept for 5 minutes.
    // duration = Duration of the nap, in milliseconds.
});
```


### Contribute
```
fork https://github.com/aichholzer/pancho/
```


### License

[MIT](https://github.com/aichholzer/pancho/blob/master/LICENSE)
