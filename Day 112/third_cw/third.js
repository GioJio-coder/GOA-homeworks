
import * as personal from './first.js';
import { fetchAndLog } from './second.js';


console.log('Firstname:', personal.firstName);
console.log('Lastname:', personal.lastName);


fetchAndLog('https://api.github.com');