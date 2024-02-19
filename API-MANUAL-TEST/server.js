const express= require('express');
const app=express();

const port=3000;

app.get('/', (req,res)=>{
    res.send('Hellow Browser');
});

app.get('/waheed', (req,res)=>{
    res.send('Hello Waheed');
})

app.listen(port,()=>{
    console.log('Listening on '+ port);
})