// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
// static content 
// app.use(express.static(path.join(__dirname, "./static")));
app.use(express.static(path.join(__dirname, "./client")));
app.use(express.static(path.join(__dirname, "./build")));
// require body-parser
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded());

// setting up ejs and our views folder
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');


// tell the express app to listen on port 8000
var server = app.listen(8000, function() {
 console.log("listening on port 8000");
})

app.use(function(req, res, next) {
	// req.header()
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//api key AIzaSyCXe6kWvFnnXRkgeelYryNJqUzJkftY4wY

// root route to render the index.ejs view
app.get('/', function(req, res) {
	console.log(res);
    res.render('index');

})

app.get('/hello', function(req, res){
  res.render('hello');
})

// app.post('/quotes', function(req, res) {
//   console.log("POST DATA", req.body);
//   var user = new User({name: req.body.name, quote: req.body.quote});
//   // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
//   user.save(function(err) {
//     // if there is an error console.log that something went wrong!
//     if(err) {
//       console.log('something went wrong');
//     } else { // else console.log that we did well and then redirect to the root route
//       console.log('successfully added a user!');
//       res.redirect('/');
//     }
//   })
// })


// app.get('/quotes', function(req, res) {

//     User.find({}, function(err, users){
//         if(err){
//             console.log("Found errors looking for the androids");
//         } else {
//             console.log('Found androids!');
//             console.log("User: " + users);
//             res.render('quotes', {users: users});
//         }

//     })

// })

