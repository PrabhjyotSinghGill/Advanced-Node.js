// A Promise is an Object to represent the eventual completion of an async operation.
const delay = (seconds) =>
  new Promise((resolves, rejects) => {
    setTimeout(resolves("the delay has ended"), seconds * 1000);
  });

delay(2).then(console.log);
