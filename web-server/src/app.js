const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello express');
});

app.get('/help', (req, res) => {
    res.send('Help page');
})

app.get('/about', (req, res) => {
    res.send('This is my page')
})

app.get('/weather', (req, res) => {
    res.send('weather nice today indeed yes very yes')
});

app.listen(3000, () => {
    console.log(`server is up on port 3000.`);
});