const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  var now = new Date().toString();

  console.log(`${now}:`)
  next();
});

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
  // return 'test';
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
})

app.get('/', (request, response) => { // '/' is the root route
  // response.send('<h1>Hello Express!</h1>');
  // response.send({
  //   name: 'Shovan',
  //   likes: [
  //     'mathematics',
  //     'writing',
  //     'tabletennis',
  //     'reading',
  //     'anime',
  //     'watching'
  //   ]
  // });
  response.render('home.hbs', {
    pageTitle: 'Homepage',
    // currentYear: new Date().getFullYear(),
    welcomeMsg: 'Hello User'
  });
});

app.get('/about', (request, response) => { // about route
  response.render('about.hbs', {
    pageTitle: 'About Page',
    // currentYear: new Date().getFullYear()
  });
});

app.get('/bad', (request, response) => {
  response.send({
    errorMessage: 'server not setup'
  });
});
app.listen(3000, () => {
  console.log("Server is up at port 3000");
});
