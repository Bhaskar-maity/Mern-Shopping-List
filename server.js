const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const items = require('./routes/api/items');

const app = express();

//bodyparser middleware
app.use(bodyParser.json());

//db config
const db = require('./config/key').mongoURI;


//mongo connect
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Mongodb connected..'))
    .catch(err => console.log(err));

//use routes
app.use('/api/items',items);

// serve static assets
if(process.env.NODE_ENV === 'production') {
    //set static fol
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));