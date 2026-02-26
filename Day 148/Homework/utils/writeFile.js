const fs = require("fs/promises");
const path = require("path");

const writeFile = async (data) => {
    try {
        JSON.stringify(data, null, 2)
    } catch (error) {
        Error("Failed to write file");
    }
};

module.exports = writeFile;