import express from 'express';

const app=express();
app.use(express.static('dist'))


app.get('/',(req,res)=>{
    res.send('server is ready');
});

//get a list of 5 jokes

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
        id:1,
        title:'a joke',
        content:'this is a joke'
    },
    {
        id:2,
        title:'new joke',
        content:'this is another joke'
    }
];
res.send(jokes);
});
const port=process.env.PORT || 4000;

app.listen(port,()=>{
    console.log('serve at http://localhost:${port}');
});