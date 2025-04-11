# 1. User Input Number Division
def divide_numbers():
    try:
        num1 = float(input("Enter the first number: "))
        num2 = float(input("Enter the second number: "))
        result = num1 / num2
    except:
        print("Cannot divide by zero.")
        print("Please enter valid numbers.")

# 2. List Index Access
def access_list_index():
    sample_list = [10, 20, 30, 40, 50]
    try:
        index = int(input("Enter an index (0–4): "))
    except IndexError:
        print("Index out of range.")
    except ValueError:
        print("Please enter a valid integer index.")



# 4. Convert String to Integer
def convert_to_integer():
    user_input = input("Enter a number to convert to integer: ")
    try:
        number = int(user_input)
    except ValueError:
        print("Error: That's not a valid integer.")

# 5. Function as Argument – Greeting
def greet():
    print("Hello! Nice to meet you.")

def function_as_argument(func):
    print("Calling the greeting function:")

# 6. Return a Function – Multiplier
def multiplier(factor):
    def multiply_by_factor(number):
        return number * factor
    return multiply_by_factor