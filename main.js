const express = require('express')
const app = express();
const path = require('path');
app.set('view engine', 'ejs');

app.use('/public',express.static(path.join(__dirname,'/public')));

app.get('/',(req,res) => {
    res.render("home")

})

app.listen(3000,()=>{
    console.log("I am running on port 3000");
})
