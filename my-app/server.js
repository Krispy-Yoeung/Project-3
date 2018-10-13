var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));





// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});


// var mongoose = require("mongoose");
// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost:27017/project-3" , {
//     useNewUrlParser: true
// });
// var userSchema = new mongoose.Schema({
//     username: String,
//     email: String,
//     password: String

// });
// var User = mongoose.model("User", userSchema);



// app.post("/signup", (req, res) => {
//     var myData = new User(req.body);
//     myData.save()
//         .then(item => {
//             res.send("user saved to database");
//         })
//         .catch(err => {
//             res.status(400).send("Unable to save to database");
//         });
// });

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on "http://localhost:${port}"`));

