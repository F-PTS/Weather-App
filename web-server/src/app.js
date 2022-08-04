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

    if(!req.query.adress) {
        return res.send({
            error: 'you must provide an adress'
        })
    }

    res.send({
        forecast: 'It is sunny',
        location: 'Poland',
        adress: req.query.adress
    })
});

// app.get('/products', (req, res) => {
//     if(!req.query.search) {
//         return res.send({
//             error: 'you must provide a search term'
//         })
//     }

//     console.log(req.query.search);
//     res.send({
//         products: []
//     })
// })

app.get('*', (req, res) => {
    res.send("404! The page doesn't exist")
})

app.listen(3000, () => {
    console.log(`server is up on port 3000.`);
});