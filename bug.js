const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  setTimeout(() => {
    if (Math.random() < 0.5) {
      // Simulate a success
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Success!');
    } else {
      // Simulate a failure by throwing an error
      throw new Error('Simulated error');
    } 
  }, 1000);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
