def xor(a,b):
    return a!= b

def get_real_floor(n):
    if n < 1:
        return n
    elif n < 13:
        return n-1
    elif n > 13:
        return n-2

def goose_filter(birds):
    geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
    return [bird for bird in birds if bird not in geese]

def name_shuffler(s):
    parts = s.split()
    return f"{parts[1]} {parts[0]}"


def divisible_by(numbers, divisor):
    return [num for num in numbers if num % divisor == 0]

def pipe_fix(nums):
    return list(range(min(nums), max(nums) + 1))

def plural(n):
    return n == 0 or n > 1

def multi_table(number):
    res = ""
    for i in range(1,11):
        res += f"{i} * {number} = {i*number}\n"
    return res[0:-1]

def problem(a):
    if type(a) == str: return "Error"
    return a*50+6

def check_alive(health):
    if health > 0:
        return True
    else:
        return False

def add_five(num):
    total = num + 5
    return total

def combat(health, damage):
    if health - damage > 0: return health - damage
    return 0

def capitalize_word(word: str) -> str:
    return word[0].upper() + word[1:]

def how_many_light_sabers_do_you_own(*args):
    if len(args) == 0: return 0
    return 18 if args[0] == "Zach" else 0

def distinct(seq):
    res = []

    for i in seq:
        if i not in res: res.append(i)

    return res