def sequence_sum(begin_number, end_number, step):
    return sum(range(begin_number,end_number + 1,step))

def sort_by_length(arr):
    return sorted(arr, key=lambda x: len(x))

def nb_dig(n, d):
    count = 0
    for k in range(n + 1):
        square = k * k
        count += str(square).count(str(d))
    return count

def remove_url_anchor(url):
    return url.split("#")[0]
def remove_url_anchor(url):
    if "#" in url:
        return url[:url.index("#")]
    else: return url

def capitals(word):
    res = []

    for i in range(len(word)):
        char = word[i]

        if char.isupper(): res.append(i)

    return res
def capitals(word):
    return [i for i in range(len(word)) if word[i].isupper()]

def small_enough(array, limit):
    for i in array:
        if i > limit: return False
    return True

def factorial(n):
    if n < 0 or n > 12:
        raise ValueError

    result = 1
    for i in range(2, n+1):
        result *= i

    return result

def dont_give_me_five(start,end):
    res = 0
    for i in range(start,end + 1):
        if "5" not in str(i):
            res+=1
    return res

def is_leap_year(year):
    return year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)

def sum_digits(number):
    number = [int(i) for i in str(number) if i in "0123456789"]
    return sum(number)

def sum_digits(number):
    res = 0

    if str(number)[0] == "-": number = int(str(number)[1:])

    for i in str(number):
        res += int(i)

    return res

def gimme(input_array):
    middle_value = sorted(input_array)[1]
    return input_array.index(middle_value)

def angle(n):
    return (n - 2) * 180

def two_oldest_ages(ages):
    sorted_ages = sorted(ages)
    return sorted_ages[-2:]
