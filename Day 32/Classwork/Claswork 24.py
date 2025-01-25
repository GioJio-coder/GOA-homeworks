def generate_big_sentence(name, surname, age):
    name = "giorgi"
    surname = "jioshvili"
    age = 13
    print("Hello, my name is {}, my surname is {}, my age is {}.".format(num1, num2, num3))

    print(f"Hello, my name is {name}, my surname is {surname}, my age is {age}.")


def my_split(main_string, string_to_split):
    print(main_string.split(string_to_split))

main = input("enter main string: ")
second = input("enter second string:")

my_split(main, second)


def manual_append(main_list, item_to_insert):
    list = [1, 2, 3]
    list.insert(3, "4")
    print(list)
    print(list[3])