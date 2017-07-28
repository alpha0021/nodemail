var express = require("express");
var app = express();
app.set('view engine',"ejs");

app.get('/',function(req,res){
	res.render("home");
	});

app.get('/contact',function(req,res){
	res.render("contact");
	});


app.get('/history',function(req,res){
	res.render("history");
	});

app.get('/gallary',function(req,res){
	res.render("gallary");
	});

app.get('/profile/:name',function(req,res){

	//dummy  data
	var data = {age :25,job:'ninja',hobbies:['eating','coding','gaming']};
	res.render('profile',{person:req.params.name,data:data});
	});




app.listen(3000);