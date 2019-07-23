express = require('express');
var app = express();
const port = 3000;

app.get('/',(req,res)=>{
	res.send("hey there");
});

app.listen(port,()=>{
	console.log("Server started at port "+port);
} );