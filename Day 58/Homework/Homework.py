five = lambda x: x + 5

multipy = lambda x, y: x * y

even_number = lambda x: x % 2 == 0

c_f = lambda x: list(map(lambda y: (y * 9/5) + 32, x))

A = lambda x: x.starts_with("A")

list1 = [1, 2, 3, 4]
res = list(map(lambda x: x + 10, list1))

list2 = ["apple", "banana", "cherry"]
res = list(map(lambda x: x.upper(), list2))

list3 = ["hello", "world", "giorgi"]
res = list(map(lambda x: len(x), list3))

list5 = [2, 4, 6]
res = list(map(lambda x: x**2, list5))

list6 = ["Giorgi", "Bob", "Nika"]
res = list(map(lambda x: "Hello " + x, list6))

list7 = [10, 20, 30]
res = list(map(lambda x: x - 5, list7))

list8 = [3, 6, 9]
res = list(map(lambda x: x * 3, list8))

C = [0, 20, 37, 100]
res = list(map(lambda x: (x * 9/5) + 32, C))

list9 = [30, 60, 45, 80]
res = list(map(lambda x: x > 50, list9))

list10 = [1, 2, 3, 4, 5, 6]
res = list(filter(lambda x: x % 2 == 0, list10))

numbers = [5, 12, 7, 20, 3]
result = list(filter(lambda x: x > 10, numbers))

words = ["hello", "goa", "academy", "gio"]
result = list(filter(lambda x: len(x) > 5, words))

numbers = [0, 5, 8, -2]
result = list(filter(lambda x: x > 0, numbers))

names = ["gio", "Bob", "nika", "luka"]
result = list(filter(lambda x: x.startswith('A'), names))

numbers = [3, 5, 9, 12, 14]
result = list(filter(lambda x: x % 3 == 0, numbers))

words = ["apple", "banana", "cherry"]
result = list(filter(lambda x: 'e' in x, words))

None1 = [1, None, 2, None, 3]
result = list(filter(lambda x: x is not None, None1))

numbers = [20, 55, 40, 60, 45]
result = list(filter(lambda x: x <= 50, numbers))