
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('greet', () => {
    console.log(' Hello ');
});

emitter.on('add', (a, b) => {
    console.log('ჯამი:', a + b);
});

emitter.emit('greet');
emitter.emit('add', 3, 5);

const buffer = Buffer.alloc(8);
buffer.fill('A');

console.log('Fixed buffer:');
console.log(buffer);
console.log(buffer.toString());

const text = 'JS';
const textBuffer = Buffer.from(text);

console.log('String -> Buffer:');
console.log(textBuffer);
console.log(textBuffer.toString());

const decoded = textBuffer.toString();
console.log('Buffer -> String:');
console.log(decoded);

const modBuffer = Buffer.from('Hello');
console.log('Before:', modBuffer.toString());

modBuffer[0] = 10;

console.log(' After:', modBuffer.toString());

console.log(' Write text:');

process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
    const formatted = data.trim().toUpperCase();
    console.log('დამუშავებული ტექსტი:', formatted);
    process.exit();
});
