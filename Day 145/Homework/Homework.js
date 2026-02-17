
const fs = require('fs')


async function readFile() {
    try {
        const data = await fs.readFile('utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

async function writeFile(data) {
    await fs.writeFile(JSON.stringify(data, null), 'utf8');
}

app.get('/books', async (req, res) => {
    const books = await readFile();
    res.json(books);
});

app.post('/books', async (req, res) => {
    const books = await readFile();
    const newBook = req.body;

    await writeFile(books);
    res.json(books);
});

    await writeFile();
    res.json();

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));