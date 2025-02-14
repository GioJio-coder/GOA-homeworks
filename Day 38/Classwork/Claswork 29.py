tuple = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
print(tuple[0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

def no_duplicates(user_list):
    return list(set(user_list))

print(no_duplicates([1, 1, 2, 3]))
print(no_duplicates([1, 2, 2, 3]))
print(no_duplicates([1, 2, 3, 3]))