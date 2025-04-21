def first_non_consecutive(arr):
    for i in range(1, len(arr)):
        cur_num = arr[i]
        prev_num = arr[i-1]
        
        if cur_num - prev_num > 1: return cur_num
    
    return None



def to_alternating_case(string):
    return string.swapcase()


def correct(s):
    return s.replace("5", "S").replace("0", "O").replace("1", "I")



def is_palindrome(s):
    s = s.lower()
    return s == s[::-1]



def bonus_time(salary, bonus):
    if bonus == True:
        return f"${salary*10}"
    return f"${salary}"



def final_grade(exam, projects):
    if exam > 90 or projects > 10: return 100
    elif exam > 75 and projects >= 5: return 90
    elif exam > 50 and projects >= 2: return 75
    return 0




def sum_str(a, b):
    if len(a) > 0 and len(b) == 0: return a
    elif len(a) == 0 and len(b) > 0: return b
    elif len(a) == 0 and len(b) == 0: return "0"

    return str(int(a) + int(b))




def expression_matter(a, b, c):
    combs = [
        a+b+c,
        a*b*c,
        (a+b)*c,
        a*(b+c),
        a+(b*c),
        (a*b)+c,
        a*b+c
    ]
    
    return max(combs)


def how_much_i_love_you(nb_petals):
    num=nb_petals % 6
    if num == 0: return "not at all"
    elif num == 1: return "I love you"
    elif num == 2: return "a little"
    elif num == 3: return "a lot"
    elif num == 4: return "passionately"
    elif num == 5: return "madly"




def reverse_list(l):
    return l[::-1]




def odd_count(n):
    return n // 2



def find_difference(a, b):
    v_a = a[0] * a[1] * a[2]
    v_b = b[0] * b[1] * b[2]
    
    if v_a > v_b: return v_a - v_b
    return v_b - v_a




def greet(language):
    all_lang = [ 
        ("english", "Welcome")
        , ("czech", "Vitejte")
        , ("danish", "Velkomst")
        , ("dutch", "Welkom")
        , ("estonian", "Tere tulemast")
        , ("finnish", "Tervetuloa")
        , ("flemish", "Welgekomen")
        , ("french", "Bienvenue")
        , ("german", "Willkommen")
        , ("irish", "Failte")
        , ("italian", "Benvenuto")
        , ("latvian", "Gaidits")
        , ("lithuanian", "Laukiamas")
        , ("polish", "Witamy")
        , ("spanish", "Bienvenido")
        , ("swedish", "Valkommen")
        , ("welsh", "Croeso")
    ]
    
    for key in all_lang:
        if key[0] == language: return key[1]
    
    return "Welcome"




def people_with_age_drink(age):
    if age < 14:
        return "drink toddy"
    elif age < 18:
        return "drink coke"
    elif age < 21:
        return "drink beer"
    else:
        return "drink whisky"
    




def two_sort(array):
    array.sort()
    
    res = ""
    for i in array[0]:
        res += i+"***"
    
    return res[:-3]



la_liga_goals = 43
champions_league_goals = 10
copa_del_rey_goals = 5

total_goals = la_liga_goals + champions_league_goals + copa_del_rey_goals




def solution(a, b):
    if len(a) > len(b):
        return b+a+b
    else:
        return a+b+a
    


def fix_the_meerkat(arr):
    arr.reverse()
    return arr



def find_multiples(integer, limit):
    return [x for x in range(integer, limit + 1, integer)]




def create_array(n):
    return list(range(1, n + 1))


# 2) Print your name
print(" My name is Giorgi")  # ჩანაცვლე შენი სახელით

# 3) Print a favorite quote
print("Believe in yourself.")  # ბრჭყალებით ციტატა

# 5) Print a simple math result
print(2 + 3)  # მარტივი მათემატიკური მოქმედება

# 7) Convert string to integer
num_str = "3"  # სტრინგი
num_int = int(num_str)  # გადავიყვანეთ ინტეჯერში
print(num_int)

# 8) Add two floats
a = 3.5
b = 2.5
result = a + b
print(result)

# 9) Concatenate two strings
str1 = "Hello"
str2 = "World"
greeting = str1 + str2
print(greeting)

# 10) Print data types
int = 10
str = "Python"
float = 3.5
print(type(int))    # int ტიპი
print(type(str))    # str ტიპი
print(type(float))# float ტიპი

# 11) User input and type conversion
age = int(input("Enter your age: "))  # მომხმარებლის ასაკის შეყვანა
print(age + 1)

# 12) Ask for your name
name = input("What is your name? ")
print(name)

# 13) Ask for age and calculate next year’s age
age_now = int(input("How old are you? "))
print(age_now + 1)

# 14) Simple calculator: addition
num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
print(num1 + num2)

# 15) Favorite color
color = input("What is your favorite color? ")
print(color )

# 16) Check if the user is tall enough
height = int(input("Enter your height in cm: "))
if height > 150:
    print("You are tall enough!")
else:
    print("Sorry, you are not tall enough.")

# 17) Print numbers from 1 to 5 using for loop
print("Numbers from 1 to 5:")
for x in range(1, 6):
    print(x)

# 18) Print each letter of a string
word = "Python"
print("Each letter in 'Python':")
for letter in word:
    print(letter)

# 19) Sum of numbers 1 to 10
total = 0
for x  in range(1, 11):
    total += x
print(total)

# 20) Multiplication table for 2 (2x1 to 2x5)
print("Multiplication table for 2:")
for x in range(1, 6):
    print(f"2 x {x} = {2 * x}")

# 21) Print even numbers from 2 to 20
print("Even numbers from 2 to 20:")
for x in range(2, 21, 2):  
    print(x)

# 22) Print numbers from 1 to 5 using while loop
print("Numbers from 1 to 5 using while loop:")
x = 1
while x <= 5:
    print(x)
    x += 1

# 23) Sum of numbers 1 to 5 using while loop
x = 1
total = 0
while x <= 5:
    total += x
    x += 1
print(total)

# 24) Count down from 10 to 1
print("Countdown from 10 to 1:")
x = 10
while x >= 1:
    print(x)
    x -= 1

# 25) Print odd numbers from 1 to 10
print("Odd numbers from 1 to 10:")
x = 1
while x <= 10:
    if x % 2 != 0:
        print(x)
    x += 1

# 27) Print all elements of a list
items = ["apple", "banana", "cherry"]
print("List items:")
for item in items:
    print(item)

# 28) Find the length of a list
my_list = [1, 2, 3, 4, 5]
print(len(my_list))

# 29) Access a specific element from the list
numbers = [10, 20, 30, 40]
print(numbers[1])  # ინდექსი 1 არის მეორე ელემენტი

# 30) Add an element to the list
my_list = ["apple", "banana", "cherry"]
my_list.append("orange")  # ვამატებთ ერთ ელემენტს ბოლოში
print(my_list)

# 31) Remove an element from the list
fruits = ["apple", "banana", "cherry"]
fruits.remove("banana")  # ვშლით ელემენტს სახელით
print(fruits)

# 35) Convert a list of strings to uppercase
words = ["python", "code", "fun"]
uppercased = [word.upper() for word in words]  # ყველა სიტყვა დიდად
print(uppercased)

# 36) Create a list of numbers squared if they are divisible by 2
nums = [1, 2, 3, 4, 5, 6]
squared_evens = [x**2 for x in nums if x % 2 == 0]  # მხოლოდ ლუწების კვადრატები
print(squared_evens)

# 37) Function to greet a user
def greet(name):
    print(f"Hello, {name}")

# 38) Function to add two numbers
def add(a, b):
    return a + b
print(add(5, 7))

# 39) Function to check if a number is even or odd
def even_or_odd(num):
    return "Even" if num % 2 == 0 else "Odd"
print(even_or_odd(4))
print(even_or_odd(7))

# 40) Function to calculate the area of a rectangle
def area(length, width):
    return length * width
print(area(5, 3))

# 41) Function to reverse a string
def reverse_string(s):
    return s[::-1]
print(reverse_string("Python"))

# 42) Create and print a tuple
my_tuple = (10, "hello", 3.14)
print(my_tuple)

# 43) Access an element in a tuple
colors = ("red", "green", "blue", "yellow")
print(colors[1])  # ინდექსი 1 — მეორე ელემენტი

# 44) Find the length of a tuple
my_tuple = (1, 2, 3, 4, 5)  # თაფლი 5 ელემენტით
length = len(my_tuple)  # len() ფუნქცია აბრუნებს ელემენტების რაოდენობას
print(length)

# 45) Concatenate two tuples
tuple1 = (10, 20)
tuple2 = (30, 40)
combined = tuple1 + tuple2  # + ოპერატორით ვაერთიანებთ ორ თაფლს
print(combined)

# 46) Check if an item exists in a tuple
items = ("apple", "banana", "cherry")
if "banana" in items:  # ვამოწმებთ არის თუ არა "banana" თაფლში
    print("Found")
else:
    print("Not found")

# 47) Create and print a set
my_set = {1, 2, 3}  
print(my_set)

# 48) Check if an element is in a set
fruits = {"apple", "banana", "cherry"}
if "banana" in fruits:
    print("Yes")
else:
    print("No")

# 49) Add an element to a set
numbers = {10, 20, 30}
numbers.add(40)  # set.add() მეთოდით ვამატებთ ახალ ელემენტს
print(numbers)

# 50) Remove an element from a set
colors = {"red", "green", "blue"}
colors.remove("green")  # remove() შლის მითითებულ ელემენტს
print(colors)

# 52) Create and print a dictionary
person = {"name": "Giorgi", "age": 25}
print(person)

# 53) Access a value by key
print(person["name"])  

# 54) Add a new key-value pair to a dictionary
person["city"] = "Batumi"
print(person)

# 55) CODEWARS
name = "codewa.rs"

# 56) CODEWARS
def get_char(number):
    return chr(number)