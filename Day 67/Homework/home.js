let G = {}

let person = {
    name: "Giorgi",
    age: 14,
    city: "Tbilisi"};

    console.log(person.name); 

    person.country = "Georgia";
    console.log(person);

    let person = {
        name: "Giorgi",
        age: 14,
        city: "Tbilisi",
        academy: {
        academy: "GOA",
        roll: "Student"
        }  };

        person.age = 20;
        console.log(person.age); 



        let num1 = 3;
        let num2 = 5;
        
        if (num1 > 10 && num2 > 10) {
        console.log("Both numbers are greater than 10."); }  
        else {
        console.log("At least one number is 10 or less.");  }

        let isMonday = true;
        console.log(!isMonday);


        let num = 1;
        let aString = String(num);
        console.log(aString);      
        console.log(typeof aString); 


        let vailable = true;
        let bool = String(vailable);
        console.log(bool);      
        console.log(typeof bool); 


        let str = "123";
        let Num = Number(str);
        console.log(Num);      
        console.log(typeof Num); 


        let bool = false;
        let num = Number(bool);
        console.log(num);      


        let invalid = "hello";
        let res = Number(invalid);
        console.log(res);     
        console.log(typeof res); 