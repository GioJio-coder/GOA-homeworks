
    let toggle = true;
    const flashInterval = setInterval(() => {
    document.title = toggle ? "Hello" : "Goodbye";
    toggle = !toggle;
    }, 1000);
    setTimeout(() => clearInterval(flashInterval), 6000);

    const box = document.getElementById('box');
    let position = 0;
    const moveBox = setInterval(() => {
    if (position >= 100) {
        clearInterval(moveBox);
    } else {
        position += 10;
        box.style.left = position + 'px';
    }
    }, 200);

    let Count = 0;
    const randLogger = setInterval(() => {
      const rand = Math.floor(Math.random() * 10) + 1;
    console.log("Random:", rand);
    Count++;
    if (logCount >= 5) {
        clearInterval(randLogger);
    }
    }, 1500);

    const strings = ['apple', 'banana', 'cherry'];
    for (let i = 0; i < strings.length; i++) {
    console.log(strings[i].toUpperCase());
    }

    const nums1 = [1, 2, 3];
    nums1[1] = 0;
    console.log("Replaced middle:", nums1);

const Arr = ['one', 'two', 'three'];
    console.log(Arr[2]);
    console.log(Arr[1]);
    console.log(Arr[0]);