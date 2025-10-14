function checkNumber(n) {
return new Promise((resolve, reject) => {
    setTimeout(() => n > 10 ? resolve("resolve") : reject("reject"), 2000);
});
}

async function run() {
try {
    let result = await checkNumber(15); 
    console.log(result);
} catch (err) {
    console.log(err);
}
}

run();