string = lambda x:x[::-1].capitalize()
print(string("hello"))
print(string("giorgi"))
print(string("jioshvili"))

print((lambda x: x * 2)(3))

list0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(list(map(lambda x: x**2, list0)))