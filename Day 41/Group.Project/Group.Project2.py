import random

def guess_the_number():
    number_to_guess = random.randint(1, 100)   
    attempts = 0 

    print("მოგესალმებით რიცხვის გამოცნობის თამაშში!")
    print("რიცხვი იქნება 1 დან 100-მდე.")

    while True:
        guess = int(input("Make a guess: ")) 
        attempts += 1  

        if guess < number_to_guess:
            print("ზედმეტად დაბალი!")
        elif guess > number_to_guess:
            print("ზედმეტად მაღალი!")
        else:
            print(f"გილოცავ! შენ გამოიცანი რიცხვი {number_to_guess}  {attempts} ცდაში.")
            break

if __name__ == "__main__":
    guess_the_number()