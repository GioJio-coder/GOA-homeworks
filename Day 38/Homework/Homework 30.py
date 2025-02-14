tuple1 = (1, 2, 3, 4, 5)
print(tuple1[1])
print(tuple1[4])
print(tuple1[2:5])

tuple2 = (1, 2, 3)
tuple2[1] = 5
print(tuple2)

tuple3 = (1, 1, 2, 2, 3)
num1 = tuple3.count(2)
num2 = tuple3.index(2)
print(num1)
print(num2)


set1 = {1, 2, 3, 4, 5}
set1.add(6)
set1.remove(2)
print(set1)

list1 = {1, 1, 2, 2, 3, 3}
num1 = set(list1)
print(num1)