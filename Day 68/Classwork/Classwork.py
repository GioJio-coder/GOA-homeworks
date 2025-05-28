def disemvowel(string):
    vowels = "aeiouAEIOU"
    res = ""

    for i in string:
        if i not in vowels:
            res += i

    return res



def square_digits(num):
    return int("".join([str(int(d)**2) for d in str(num)]))



def high_and_low(numbers):
    nums = list(map(int, numbers.split(" ")))
    return f"{max(nums)} {min(nums)}"


def filter_list(l):
    return list(filter(lambda x: type(x) == int, l))



