const express = require('express');
const handlebars = require('express-handlebars');

const app = express()
const hbs = handlebars.create(
    {defaultLayout: 'main'}
);
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  res.render('home', {layout: false});
});
/*
app.get('/dashboard', function (req, res) {
  res.render('template': {'vars', 'here'})
});
*/

app.listen(3000, function() {
  console.log('App is running...')
});
