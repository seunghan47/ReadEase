
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello phanta!'));
const port = process.env.PORT || 4000;

const mongoose = require('mongoose');
const cors = require('cors');

// Connect Database
app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false}));

app.get('/', (req, res) => res.send('Hello phanta!'));

const conn_str = 'mongodb+srv://seunghan47:Tmdgkseogks12@cluster0.v63n9il.mongodb.net/?retryWrites=true&w=majority';

mongoose.set('strictQuery', false);
mongoose.connect(conn_str, {
    useUnifiedTopology : true,
    useNewUrlParser : true
})
.then(() => {
    app.listen(port)
    console.log('MongoDB Connection Suceeded . . .')
})
.catch(err => {
    console.log('Error in DB Connection ${err}')
})

const users = require('./routes/api/users');

app.use('/api/users', users);

const books = require('./routes/api/books')

app.use('/api/books', books);
