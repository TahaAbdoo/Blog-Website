const express = require('express')
const app = express()
const port = 5500;
const router = require('./router/router');
const cors = require('cors');
const multer=require('multer');
const file =multer();
const path = require('path');   
const db=require('./config/config');

app.use('/public', express.static(path.join(__dirname, '/public')));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(router);
 
app.use(router);
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))