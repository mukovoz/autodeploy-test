
// Import the built-in 'http' module
const http = require('http');

// Define the hostname and port
const hostname = '0.0.0.0';
const port = 4000;

// Create the server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Success status
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, your  application version is v444.0.0!\n');
});

// Start listening on the defined hostname and port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});