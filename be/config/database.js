const properties = require("./properties")
var mongoose = require('mongoose');

module.exports = function(){
  mongoose.connect(properties.DB)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
}



