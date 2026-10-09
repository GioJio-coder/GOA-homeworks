const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/posts', require('./routes/posts'));

// DB Connection & Server Start
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB დაკავშირებულია');
        app.listen(PORT, () => console.log(`სერვერი ჩაირთო პორტზე ${PORT}`));
    })
    .catch(err => console.error('ბაზასთან დაკავშირების შეცდომა:', err));