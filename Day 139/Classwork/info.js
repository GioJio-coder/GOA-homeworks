const os = require("os");
const path = require("path");

const info = {
    uptime:os.uptime(),
    operatingSystem:os.platform(),
    hostname: os.hostname(),
    fileAbsolutePath:filename,
    networkInterfaces:os.networkInterfaces()
};

console.log(info);