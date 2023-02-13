const fs = require("fs");

const readStream = fs.createReadStream("./Tomas.mp4");

readStream.on("data", (chunk) => {
  //   console.log("reading little chunk\n", chunk);
  console.log("Size:", chunk.length);
});

readStream.on("end", () => {
  console.log("read stream finished");
});

readStream.on("error", (error) => {
  console.log("An Error has occured.");
  console.error(error);
});

process.stdin.on("data", (chunk) => {
  var text = chunk.toString().trim();
  console.log("chunk:", text);
});

readStream.pause();
ProcessingInstruction.stdin.on("data", (chunk) => {
  readStream.read();
});
