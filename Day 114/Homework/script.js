import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
// Write code here:
const myList = (
<ul>
    <li>Hello, world!</li>
    <li>Goodbye, Earth!</li>
    <li>Ahoy, planet!</li>
</ul>
);

root.render(myList);


