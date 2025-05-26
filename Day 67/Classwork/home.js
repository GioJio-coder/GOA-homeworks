function Operations() {
    let result1 = confirm("დააჭირეთ ok ან Cancel პირველი მნიშვნელობისთვის.");
    let result2 = confirm("დააჭირეთ ok ან Cancel მეორე მნიშვნელობისთვის.");

    console.log("result1 && result2 (and):", result1 && result2);

    console.log("result1 || result2 (or):", result1 || result2);
}