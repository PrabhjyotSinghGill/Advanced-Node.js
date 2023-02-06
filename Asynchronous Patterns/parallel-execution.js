// When we are resolving several promises at the same time, it is reffered to as parallel execution.

var fs = require("fs");
var { promisify } = require("util");
var writeFile = promisify(fs.writeFile);
var unlink = promisify(fs.unlink);
var readdir = promisify(fs.readdir);
var beep = () => process.stdout.write("\x07");
var delay = (seconds) =>
  new Promise((resolves) => setTimeout(resolves, seconds * 1000));

Promise.all([
  writeFile("readme.md", "Echo"),
  writeFile("readme.txt", "Echo"),
  writeFile("readme.json", '{"Echo":"Moto"}'),
])
  .then(() => readdir(__dirname))
  .then(console.log);
