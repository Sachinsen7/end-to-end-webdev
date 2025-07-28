const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

// server needs to respond
const server = http.createServer((req, res) => {
  // creating server => req: it handles client request; res: to send the request to client
  if (req.url === "/") {
    //
    res.statusCode = 200; // dont worry about that => Response successfull (200 OK)
    res.setHeader("Content-Type", "text/plain"); // you can add html file also
    res.end("Hello ice tea"); // sends the messege to the client "hello ice tea"
  } else if (req.url === "/ice-tea") {
    res.statusCode = 200; // dont worry about that
    res.setHeader("Content-Type", "text/plain");
    res.end("Thanks for ordering ice tea, its really hot");
  } else {
    res.statusCode = 404; // and when if the url isn't so it will gives the error with message "404 Not found"
    res.setHeader("Content-Type", "text/plain");
    res.end("Not Found");
  }
});

// listening

server.listen(port, hostname, () => {
  console.log(`Serving is listening at http://${hostname}:${port}`);
});
