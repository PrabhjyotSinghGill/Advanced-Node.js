//A duplex stream is a stream that implements both readable & writable. These streams allow data to pass through. Readable streams will pipe data into a duplex stream, and the duplex stream can also write that data.
const { Duplex, PassThrough } = require("stream");
const { createReadStream, createWriteStream } = require("fs");

const readStream = createReadStream(
  "./Advanced Streams/Readable Streams/Tomas.mp4"
);
const writeStream = createWriteStream("./copy.mp4");

class Throttle extends Duplex {
  constructor(ms) {
    super();
    this.delay = ms;
  }
  _write(chunk, encoding, callback) {
    this.push(chunk);
    setTimeout(callback, this.delay);
  }
  _read() {}

  _final() {
    this.push(null);
  }
}

const report = new PassThrough();

const throttle = new Throttle(10);

var total = 0;
report.on("data", (chunk) => {
  total += chunk.length;
  console.log("bytes:", total);
});

readStream.pipe(throttle).pipe(report).pipe(writeStream);
