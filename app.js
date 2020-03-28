const express = require('express');

const app = express();
const handlebars = require('express-handlebars').create({defaultLayout:'main'});
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 5554);

//  Public folder
app.use(express.static(path.join(__dirname, '/public')));

//  Routes

app.get('/', (req,res) => {
    var qParams = [];
    for(var p in req.query){
        context.push({'name': p, 'value':req.query[p]});
    }

    let context = {};
    context.list = qParams;
    context.type = 'GET';
    res.render('getpost', context);
});

//user can post what they have 
app.post('/', (req,res) => {
    var postParams = [];
    for(var p in req.query){
        postParmas.push({'name':p, 'value':req.query[p]});
    }
    var bodyParms = [];
    for(var item in req.body){
        bodyParams.push({'name': item, 'value': req.body[item]});
    }

    let context = {};

    context.queryList = postParams;
    context.bodyList = bodyParams;
    context.type = 'POST';
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
app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
