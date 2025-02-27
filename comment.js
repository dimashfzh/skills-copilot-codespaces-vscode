// Create web server
const express = require('express');
const app = express();
// Create web server
const http = require('http');
const server = http.createServer(app);
// Create WebSocket server
const WebSocket = require('ws');
const wss = new WebSocket.Server({ server });
// WebSocket server
wss.on('connection', (ws) => {
  // When receiving a message
  ws.on('message', (message) => {
    // Send a message to all clients
    wss.clients.forEach((client) => {
      client.send(message);
    });
  });
});
// Web server
app.use(express.static('public'));
// Start server
server.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});