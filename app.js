express = require('express');

const path = require('path');

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: false}));

const port = 3000;
app.use(cors());
app.post('/',(req,res)=>{
	res.send("hey there");
});

app.listen(port,()=>{
	console.log("Server started at port "+port);
} );
