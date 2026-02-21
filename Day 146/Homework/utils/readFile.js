const path = require("path");

async function readFile(fileName) {
    try {
        const filePath = path.join("data", fileName);
        const data = await fs.readFile(filePath, "utf-8");
        return JSON.parse(data);
    } catch (error) {
}};

export default readFile;