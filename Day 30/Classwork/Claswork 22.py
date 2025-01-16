name = str(input("enter your name: "))
choice = "u" or "l"
if choice == "u": print(name.upper())
elif choice == "l": print(name.lower())
else: print("wrong information")

def manual_swapcase(main_str):
    res = ""

    for char in main_str:
        if char.islower(): res += char.upper()
        else: res += char.lower()

    print(res)

manual_swapcase("hello")
print("hello".swapcase())