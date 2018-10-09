var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
var path = require ("path");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/project-3" , {
    useNewUrlParser: true
});
var userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String

});
var User = mongoose.model("User", userSchema);

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "./index.html");
// });
app.use('/', express.static(path.join(__dirname, './public')))

app.post("/signup", (req, res) => {
    var myData = new User(req.body);
    myData.save()
        .then(item => {
            res.send("user saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});