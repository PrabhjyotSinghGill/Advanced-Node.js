const delay = (seconds) =>
  new Promise((resolves, rejects) => {
    if (seconds > 3) {
      rejects(new Error(`${seconds} is too long!`));
    }
    setTimeout(() => {
      resolves("delay has ended");
    }, seconds * 1000);
  });

delay(4)
  .then(console.log)
  .catch((error) => console.log(`error:${error.message}`));
