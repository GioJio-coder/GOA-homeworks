const { readFile } = require('fs/promises');

const fs = require("fs");

fs.File("output.txt", "First line\n");
fs.File("output.txt", "Second line\n");

console.log("The text is written in a file");