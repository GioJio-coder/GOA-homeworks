new Promise(resolve => {
setTimeout(() => resolve("Task complete"), 3000);
}).then(msg => console.log(msg));