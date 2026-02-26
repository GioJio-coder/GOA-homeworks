const fs = require("fs/promises");
const path = require("path");

const readFile = async () => {
    try {
        return JSON.parse(data || "[]");
    } catch (error) {
        Error("Failed to read file");
    }
};

module.exports = readFile;