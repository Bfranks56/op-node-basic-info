require('dotenv').config();
const express = require('express');
const path = require('node:path');
const urlMap = require('./urlMap.Dto.js');
const app = express();

// TODO: see if I can do this with one call using the map.
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
    res.status(404).sendFile(path.join(__dirname, urlMap['/404']));
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`My first Express server is running on port ${PORT}`);
});