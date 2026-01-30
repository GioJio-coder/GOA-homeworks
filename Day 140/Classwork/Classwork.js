const eventsEmitter = require('events');
const myEmitter = new eventsEmitter();

function listener(info) {
    console.log(info);
}

myEmitter.on('welcome', listener);
myEmitter.emit('welcome', 'Hello');


const mybuffer = Buffer.from("Giorgi");

process.stdin.on("data", (input) => {
    const combinedBuffer = Buffer.concat([input, mybuffer]);

    const result = combinedBuffer.toString();
    process.stdout.write(result);

    process.exit();
});