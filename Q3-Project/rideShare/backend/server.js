var express = require('express')
var app = express()
var port = proces.env.PORT || 3000

app.get('/',function(req,res,next){
  res.send('Hello World')
})

app.listen(port,function(){
  console.log(`listening on port ${port}`);
})
