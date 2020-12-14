const express = require('express');

const app = express();
const handlebars = require('express-handlebars').create({defaultLayout:'main'});
const bodyParser = require('body-parser');
const path = require('path');

//  Project .js exports
var   dataStructure = require('./js/dataStructures');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000);

//  Public folder
app.use(express.static(path.join(__dirname, '/public')));

//  Routes

app.get('/', (req,res) => {
    let context = {};
    context.itemList = dataStructure.itemsList;

    res.render('home', context);
});

//  user can post what they have
app.post('/', (req,res) => {
    // console.log(req.body);
    let user = new  dataStructure.User(req.body.name, req.body.location);

    for (let item in req.body.give) {
        dataStructure.hasMap.get(req.body.give[item]).add(user);
    }

    for (let item in req.body.need) {
        dataStructure.needsMap.get(req.body.need[item]).add(user);
    }

    let context = {};
    context.matches = dataStructure.findMatches(req.body.give, req.body.need);

    res.send(JSON.stringify(context));
});

//  Error Handling
app.use(function(req,res){
    res.status(404);
    res.render('404');
});

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('plain/text');
    res.status(500);
    res.render('500');
});

//  Start Server
app.listen(process.env.PORT || app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
