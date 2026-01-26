console.log("Platform process:", process.platform);

process.argv.forEach((argv) => {
    console.log(` ${argv} `);
});

const os = require("os");

console.log("OS Version:", os.release());

console.log("Free Memory:", os.freemem(), "bytes");

console.warning("This is a warning message");
console.error("This is an error message");

const users = [
    { name: "Giorgi", age: 15 },
    { name: "nika", age: 20 },
];

console.table(users);