import random
# ფუნქცია
def guess_the_number():
    number_to_guess = random.randint(1, 100)
    attempts = 0
# დაწყება
    print("მოგესალმებით რიცხვის გამოცნობის თამაშში!")
    print("რიცხვი იქნება 1 დან 100-მდე.")
# მთავარი კოდი
    number_to_guess = random.randint(1, 100)
    if guess < number_to_guess:
            print("ზედმეტად დაბალი!")
    elif guess > number_to_guess:
            print("ზედმეტად მაღალი!")
    while True:
        guess = int(input("Make a guess: "))
        attempts += 1
    while True:
        guess = int(input("Make a guess: "))
        attempts += 1
    else:
            print(f"გილოცავ! შენ გამოიცანი რიცხვი {number_to_guess}  {attempts} ცდაში.")
            break

    if guess < number_to_guess:
            print("ზედმეტად დაბალი!")
    elif guess > number_to_guess:
            print("ზედმეტად მაღალი!")
    else:
            print(f"გილოცავ! შენ გამოიცანი რიცხვი {number_to_guess}  {attempts} ცდაში.")
            break

if __name__ == "__main__":
    guess_the_number()