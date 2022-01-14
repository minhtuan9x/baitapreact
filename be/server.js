var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
var properties = require('./config/properties');
var db = require('./config/database');
var app = express();
var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });
var router = require("./routes/student");
var whitelist = properties.CORS;
var corsOptions = {
    origin: function(origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}
app.use(cors(corsOptions));
db();
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);


app.use('/student', router);

app.listen(properties.PORT, (req, res) => {
    console.log(`Server is running on ${properties.PORT} port.`);
})