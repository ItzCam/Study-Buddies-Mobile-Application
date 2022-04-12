const net = require("net"), fs = require("fs");

let server, istream = fs.createReadStream("./sender/SC-02.pdf");

server = net.createServer(socket => {
    socket.pipe(process.stdout);
    istream.on("readable", function () {
        let data;
        while (data = this.read()) {
            socket.write(data);
        }
    })
    istream.on("end", function(){
        socket.end();
    })
    socket.on("end", () => {
        server.close(() => { console.log("\nTransfer is done!") });
    })
})

server.listen(8000, '0.0.0.0');

const net = require("net"), fs = require("fs"), remote_server = process.argv[2];
let socket;

socket = remote_server ? net.connect(8000, remote_server) : net.connect(8000);

let ostream = fs.createWriteStream("./receiver/SC-02.pdf");
let date = new Date(), size = 0, elapsed;
socket.on('data', chunk => {
  size += chunk.length;
  elapsed = new Date() - date;
  socket.write(`\r${(size / (1024 * 1024)).toFixed(2)} MB of data was sent. Total elapsed time is ${elapsed / 1000} s`)
  process.stdout.write(`\r${(size / (1024 * 1024)).toFixed(2)} MB of data was sent. Total elapsed time is ${elapsed / 1000} s`);
  ostream.write(chunk);
});
socket.on("end", () => {
  console.log(`\nFinished getting file. speed was: ${((size / (1024 * 1024)) / (elapsed / 1000)).toFixed(2)} MB/s`);
  process.exit();
});

