const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

var app = express();

//middleware
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', ()=>{
  return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text)=>{
  return text.toUpperCase();
})

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express!</h1>');
  res.render('home.hbs',{
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my Website!'
  })
});

app.get('/about',(req, res) =>{
  // res.send('About Page!');
  res.render('about.hbs',{
    pageTitle: 'About Page'
  });
});


app.get('/bad',(req, res) =>{
  res.send({
    errorMessage : 'This is a bad request.',
    url : req.url
  });
});


app.listen(port,()=>{
  console.log(`Server is up on port ${port}`);
});
