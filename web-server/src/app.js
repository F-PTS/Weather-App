const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'hbs');

const viewsPath = path.join(__dirname, '../templates');
app.set('views', viewsPath);

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Lorem ipsum dolor sit amet.'
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About us title',
        name: 'Lorem ipsum dolor sit amet consectetur.'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help title',
        name: 'Lorem ipsum dolor sit amet consectetur.'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is sunny',
        location: 'Poland'
    })
});

app.listen(3000, () => {
    console.log(`server is up on port 3000.`);
});