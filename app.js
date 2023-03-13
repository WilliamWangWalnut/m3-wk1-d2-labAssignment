const express = require("express");
const path = require("path");
const routes = require("./routes/index");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);

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
