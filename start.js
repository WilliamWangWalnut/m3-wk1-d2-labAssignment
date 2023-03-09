var app = require('./app');  //importing the Express app created in app.js.

var server = app.listen(3000, function(){
    console.log(`Express is running on port ${server.address().port}`);  //output a message to the terminal to indicate that the server is running
});   

//运行的话  在bash输入 node start.js