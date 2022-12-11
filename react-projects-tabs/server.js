require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());

const jobsRouter = require('./routes/jobRoutes');
app.use('/jobs', jobsRouter);

app.listen(3003, () => console.log('server is running'));
