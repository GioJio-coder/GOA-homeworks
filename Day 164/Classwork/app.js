const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev')); 
app.use(express.json()); 

const router = express.Router();

router.get('/', (req, res) => {
    res.send('სერვერი წარმატებით მუშაობს!');
});

router.get('/info', (req, res) => {
    res.json({
        status: "Success",
        message: "მოგესალმებით ჩვენს API-ზე"
    });
});

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});