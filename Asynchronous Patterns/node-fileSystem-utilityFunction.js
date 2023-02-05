var fs = require("fs");
var { promisify } = require("util");

var writeFile = promisify(fs.writeFile);

writeFile("sample.txt", "It is a Sample!")
  .then(() => console.log("file created!"))
  .catch((error) => console.log("error creating file!"));
