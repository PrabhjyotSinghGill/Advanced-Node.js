//Promise are cleaner way to execute async code than callbacks
//NODE JS converts quickly  callback functions into Promises

var { promisify } = require("util");
// {promisify} is a function that convert Callback functions into promises. Which comes in util package in Node JS.

const delay = (seconds, callback) => {
  if (seconds > 3) {
    callback(new Error(`${seconds} is too long!`));
  } else {
    setTimeout(() => {
      callback(null, "delay has ended");
    }, seconds * 1000);
  }
};

// USing promisify
var promiseDelay = promisify(delay);

promiseDelay(2)
  .then(console.log)
  .catch((error) => console.log(`error:${error.message}`));
