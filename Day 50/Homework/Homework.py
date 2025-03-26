while True:
    user_input = input("Enter a number: ")
    if user_input() or (user_input and user_input):
        number = int(user_input)
        print(f"You entered: {number}")
    else:
        print("Error: Please enter a valid number.")


my_list = [1, 2, 3, 4, 5]

try:
    index = int(input("Enter an index to access: "))
    print(f"Value at index")
except IndexError:
    print("Error: Index out of range.")
except ValueError:
    print("Error: Please enter a valid integer.")



try:
    num = 5
    text = "Hello"
    result = text + num  
    print(result)
except TypeError:
    print("Error: Cannot add an integer to a string. Convert the number to a string first.")