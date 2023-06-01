const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./ToDoRoutes');
const cors = require('cors');

require('dotenv').config();

mongoose.set("strictQuery", false);

const PORT = 7001 || process.env.port;

app.use(express.json());
app.use(cors())

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log(`Connected to MONGO`))
.catch((err) => console.log(err))

app.use(routes);

app.listen(PORT, () => {
    console.log(`I'm listening on port ${PORT}`)
})


