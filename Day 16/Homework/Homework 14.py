# while ციკლის დროს იტერაციების რაოდენობა ყოველთვის ცნობილი არ არის და შესაძლოა, რომ while ციკლი გაიშვას უსასრულოდ, ხოლო for ციკლის დროს იტერაციების რაოდენობა ყოველთვის ცნობილია ასევე for ციკლს აქვს დასასრული.

for x in range(50):
    print("GOA BEST!!!")
while num1 != "GOA BEST!!!":
    num1 = ("GOA BEST!!!")
    print("GOA BEST!!!")

for x in range(1, 11):
    print(x)

for x in range(2, 4, 6, 8, 10, 12, 14, 16, 18):
    print(x)

for x in range(10, 9, 8, 7, 6, 5, 4, 3, 2):
    print(x)
    print("Blast off!")

correct_password = "5810"
user_guess = input("Enter your correct password: ")
while user_guess != correct_password:
    user_guess = input("Enter your correct password: ")

    print("Access granted")
    print("Your guess count:", str(counter))

correct_name, password = "Gio, 1520"
user_guess = input("Enter your correct name, password: ")
while user_guess != correct_name, password:
    user_guess = input("Enter your correct name, password: ")

    print("Access granted")
    print("Your guess count: ", str(counter))