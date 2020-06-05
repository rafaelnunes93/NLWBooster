import express from 'express';

const app = express();

app.get('/users',(req,res)=> {
    console.log('listagem de usuarios');

    res.json([
        'Diego',
        'Cleiton',
        'Robson',
        'Daniel',
        'Rafael'
    ]);
});

app.listen(3333);