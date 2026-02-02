import { readFile } from 'fs/promises';

async function JsonFile() {
    try {
        const jsonData = await readFile('homework.json', 'utf8');
        const parsed = JSON.parse(jsonData);

        console.log(parsed.name); 
    } catch (err) {
        console.error('Error reading JSON:', err.message);
    }
}

JsonFile();
