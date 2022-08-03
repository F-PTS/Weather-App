const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath)

app.use(express.static(path.join(__dirname, '../public')));

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

app.get('*', (req, res) => {
    res.send("404! The page doesn't exist")
})

app.listen(3000, () => {
    console.log(`server is up on port 3000.`);
});