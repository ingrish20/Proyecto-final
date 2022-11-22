const express = require('express');
const path = require('path');
//var cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');

const app = express();
//Settings
app.set('port',process.env.PORT || 8080);

//limite
app.use(bodyParser.json({limit: '200mb'}));
app.use(bodyParser.urlencoded({limit: '200mb', extended: false,parameterLimit: 1000000}));

//Routes
app.use('/api',require('./routes/api.routes'));
//Static files
app.use(express.static(path.join(__dirname,'public')));

app.listen(app.get('port'),()=>{
    console.log('Server '+ app.get('port'));
});
