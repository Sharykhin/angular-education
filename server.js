var express = require('express');
var app = express();

app.use(express.static('angularjs'));
app.listen(5000, function() {
	console.log("Server started on http://localhost:5000")
})