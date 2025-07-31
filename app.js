require('dotenv').config();
const express = require('express');
const path = require('node:path');
const urlMap = require('./urlMap.Dto.js');  // Import the URL map
const app = express();


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, urlMap['/']))
});
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, urlMap['/about']))
});
app.get("/contact-me", (req, res) => {
    res.sendFile(path.join(__dirname, urlMap['/contact-me']))
});

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, urlMap['/404'])); // Serve 404 page for unmatched routes
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`My first Express server is running on port ${PORT}`);
});