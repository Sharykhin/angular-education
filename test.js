var express = require('express');
var app = express();

app.use(express.static('tests'));
app.listen(8000, function() {
	console.log("Server started on http://localhost:8000")
})