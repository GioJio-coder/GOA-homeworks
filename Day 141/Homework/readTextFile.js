import { readFile } from 'fs/promises';

async function readTextFile() {
  try {
    const data = await readFile('text.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error('Error reading file:', err.message);
  }
}

readTextFile();
