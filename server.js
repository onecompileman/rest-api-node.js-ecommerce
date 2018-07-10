const dotenv = require('dotenv');
const http = require('http');
const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const morgan = require('morgan');

dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

router.post('/', (req, res, next) => {
    res.status(201).json({message:req.body});
});

app.use('/products', router);

const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);