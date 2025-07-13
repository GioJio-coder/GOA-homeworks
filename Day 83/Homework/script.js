
    const filterPositive = (arr) => {
    for (let num of arr) {
        if (num < 0) continue;
        console.log(num);
    }
    };

    const LongWord = (words) => {
    for (let word of words) {
        if (word.length > 5) {
        console.log(word);
        break;
        }
    }
    };

    const skipMultiples = () => {
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0) continue;
        console.log(i);
    }
    };

    const WordsStartingWithA = (words) => {
    let count = 0;
    for (let word of words) {
        if (word.length < 1) continue;
        if (word[0].toLowerCase() === 'a') count++;
    }
    console.log(count);
    };

    const skipMultiplesOf = () => {
    for (let i = 1; i <= 30; i++) {
        if (i % 4 === 0 || i % 6 === 0) continue;
        console.log(i);
    }
    };

    const LongName = (names) => {
    for (let name of names) {
        if (name.length > 8) {
        console.log(name);
        break;
        }
    }
    };

    const OddNumbers = (arr) => {
    for (let num of arr) {
        if (num % 2 === 0) continue;
        console.log(num);
    }
    };

    const PositiveEvens = (arr) => {
    let sum = 0;
    for (let num of arr) {
        if (num <= 0 || num % 2 !== 0) continue;
        sum += num;
    }
    console.log(sum);
    };
