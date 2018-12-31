const express = require('express');
const port = process.env.PORT || 3000
const exphbs = require('express-handlebars');
let app = express();

app.listen(port);
app.use('/assets', express.static(__dirname + '/public'));
app.use('/img', express.static(__dirname + '/public/img'));

app.engine('handlebars', exphbs({
    defaultLayout: 'home'
}));
app.set('view engine', 'handlebars');


app.get('/', (req, res) => {

  res.render('home/index');
})

console.log('Running at localhost:3000')