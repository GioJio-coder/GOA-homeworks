import random

def math_quiz():
    score = 0
    num_questions = 5  #რამდენი შეკითხვა იქნება

    for _ in range(num_questions):
        #რიცხვების გენერატორი
        num1 = random.randint(1, 10)
        num2 = random.randint(1, 10)
        operation = random.choice(['+', '-', '*'])
        
        #კალკულატორის ფორმულა
        if operation == '+':
            answer = num1 + num2
        elif operation == '-':
            answer = num1 - num2
        else:
            answer = num1 * num2
        
        # მომხმარებლის პასუხი
        user_answer = int(input(f"{num1} {operation} {num2} = ? "))
        
        if user_answer == answer:
            print("სწორია!")
            score += 1
        else:
            print(f"არასწორია! სწორი პასუხი არის: {answer}")

    print(f"შენი ქულა: {num_questions} დან {score}")

if __name__ == "__main__":
    math_quiz()