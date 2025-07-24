require('dotenv').config();
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const urlMap = require('./urlMap.Dto.js');

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    const filePath = urlMap[req.url] ? path.join(__dirname, urlMap[req.url]) : path.join(__dirname, '404.html');

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading page');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    });

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});