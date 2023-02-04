// 1) A Callback is a block of instruction wrapped in a function to be called when an asynchronous call has completed.

const hideString = (userinput) => userinput.replace(/[a-zA-Z]/g, "x");

console.log(hideString("ECHO"));

// 2) Continuation Passing Style CPS
const hide = (userinput, callbackfxn) => {
  callbackfxn(userinput.replace(/[a-zA-Z]/g, "x"));
};

//hide is passing a string and after computation it passes a function to peform a task to be done in a callback fashion, but a real callback is a async task.
hide("ECHO", (hidden) => {
  console.log(hidden);
});

// 3) Async pattern using Delay function

const delay = (seconds, callback) => setTimeout(callback, seconds * 1000);

console.log("starting delay function");

delay(5, () => {
  console.log("5 seconds");
});
