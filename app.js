require('dotenv').config();
const express = require('express');
const path = require('node:path');
const urlMap = require('./urlMap.Dto.js');
const app = express();

// Dynamic route creation from urlMap
Object.keys(urlMap).forEach(route => {
    if (route !== '/404') {  // Skip the 404 route
        app.get(route, (req, res) => {
            res.sendFile(path.join(__dirname, urlMap[route]));
        });
    }
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, urlMap['/404']));
});

/* 
* Keeping to show the original way I was calling each individual route
*/

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, urlMap['/']))
// });
// app.get("/about", (req, res) => {
//     res.sendFile(path.join(__dirname, urlMap['/about']))
// });
// app.get("/contact-me", (req, res) => {
//     res.sendFile(path.join(__dirname, urlMap['/contact-me']))
// });

// app.use((req, res, next) => {
//     res.status(404).sendFile(path.join(__dirname, urlMap['/404']));
// });

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`My first Express server is running on port ${PORT}`);
});