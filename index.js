const express = require('express');
const port = process.env.PORT| 3200;
const app = express();

//
app.use(express.json())

app.use('/api/translate',require('./Router/translate'))

app.get('/',(req,res)=>{
    res.send("To begin Translate:- use POST request at endpoint /api/translate/trans");

})

app.listen(port,()=>{
    console.log('The Server is started');
})
