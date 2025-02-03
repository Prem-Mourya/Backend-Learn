const express = require('express');
const morgan = require("morgan")
const app = express();


app.set("view engine", "ejs") // this is engine used to render html

// Third party middleware morgan

app.use(morgan("dev"));

// costume middleware 
app.use((req, res, next) => {
    console.log("this is middleware")
    const a = 2
    const b = 4
    console.log(a+b)
    return next()
})
app.get('/', (req, res, next) => {
    console.log("/ route middleware")
    next();
}, (req, res) => {
    res.render("index")
})
app.get('/about', (req, res) => {
    res.send("This is about page")
})

app.listen(3000, () => "Server is started...");