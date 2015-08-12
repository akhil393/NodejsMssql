#!javascript
var edge = require('edge');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
// The text in edge.func() is C# code
var helloWorld = edge.func('async (input) => { return input.ToString(); }');

var getTopUsers = edge.func('sql', function () {/*
 SELECT * from test
 */});
var getValuesById = edge.func('sql', function () {/*
 SELECT * from test where id = @id
 */});

 var test = function(req,res){

     req.param
 };


app.get('/users',function(req,res){
    getTopUsers(null, function (error, result) {
        if(error) {
            res.status(500).send(error);
            console.log(error);
        }
        if (result) {
            res.send(result);
        }})

});

app.get('/users/:id',function(req,res) {
    getValuesById({id:idq}, function (error, result) {
        if(error) {
            res.status(500).send(error);
            console.log(error);
        }
        if (result) {
           console.log(result);
            res.send(result);
        }
    })
});


app.listen(9000,function(){
    console.log('Running on PORT:'+9000);
});

/*getTopUsers(null, function (error, result) {
    if (result) {
       console.log(result);
        }});*/
