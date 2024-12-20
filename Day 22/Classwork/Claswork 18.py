list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
num1 = int(input("enter your number: "))
if 0 <= num1 and num1 < 10: print(list1[num1])
elif num1 >= -10 and <= -10: print(list1[num1])
else: print("wrong index")

list2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
for x in list2:
    print(list2*2)
    print(list2/2)