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


def is_square(n):
    if n < 0:
        return False
    root = int(n ** 0.5)
    return root * root == n


def get_middle(s):
    length = len(s)
    mid = length // 2

    if length % 2 == 0:
        return s[mid - 1:mid + 1]
    else:
        return s[mid]



def is_program(word):
    word = word.lower()  
    seen = set()

    for letter in word:
        if letter in seen:
            return False
        seen.add(letter)

    return True


def xo(s):
    s = s.lower()  
    return s.count('x') == s.count('o')


