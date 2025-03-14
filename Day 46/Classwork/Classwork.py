def manual_list(start, end, step, user_num):
    num1 = [x for x in range(start, end, step) if x > user_num]


list1 = [x for x in range(1, 101) if (x%3 == 0 or x%5 == 0) and x%15 != 0]
print(list1)

list2 = [x for x in range(10, 201) if str(x) == str(x)[::-1]]
print(list2)