import express from 'express';
import {router} from './routes'

const app = express();

app.use(express.json());
app.use(router)

app.get('/',(req,res)=>{
    return res.json({ok : true})
})

app.listen(3000,(req,res)=>{
    console.log('sevidor rodando');
})
