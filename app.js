var express = require('express'); //imports an object from another file or module
var path = require('path');
var routes = require('./routes/index') //imports an object from another file or module

var app = express();
// app.use('/', routes); //whenever it receives a request from '/' anything, it should use the routes file.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', routes);

module.exports = app;
/* 
这个是module.exports的优势, 可以一次导入多个变量var和方程function
exports就不行 exports只可以 exports.xxx = yyy
module.exports = {
    info: function (info) { 
        console.log('Info: ' + info);
    },
    warning:function (warning) { 
        console.log('Warning: ' + warning);
    },
    error:function (error) { 
        console.log('Error: ' + error);
    }
};
*/