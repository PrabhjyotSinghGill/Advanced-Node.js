var fs = require("fs");
var http = require("http");
var file = "./Tomas.mp4";

http
  .createServer((req, res) => {
    fs.readFile(file, (error, data) => {
      if (error) {
        console.log("hmmmm:", error);
      }
      res.writeHeader(200, { "Content-Type": "video/mp4" });
      res.end(data);
    });
  })
  .listen(3000, () => console.log("Buffer - Server running on port:3000..."));
