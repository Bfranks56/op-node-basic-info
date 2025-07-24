const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    // put code here to handle requests
});

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});