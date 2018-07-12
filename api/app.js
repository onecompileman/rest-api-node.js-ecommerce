const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const productRoutes = require('./routes/product-route');

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));


app.use('/products', productRoutes);

app.use((res, req, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
});

module.exports = app;