def min_value(digits):
    unique_digits = set(digits)
    sorted_digits = sorted(unique_digits)
    result = int("".join(map(str, sorted_digits)))
    return result


def triangular(n):
    return n * (n + 1) // 2 if n > 0 else 0


def sum_of_minimums(numbers):
    return sum(min(row) for row in numbers)

def gimme_the_letters(sp):
    start = sp[0]
    end = sp[-1]
    return ''.join(chr(c) for c in range(ord(start), ord(end)+1))

def flatten(l):
    return [x for item in l for x in (item if isinstance(item, list) else [item])]

def sort_by_length(arr):
    return sorted(arr, key=lambda x: len(x))

def nb_dig(n, d):
    count = 0
    for k in range(n + 1):
        square = k * k
        count += str(square).count(str(d))
    return count

def dna_to_rna(dna):
    return dna.replace("T", "U")

def fix_the_meerkat(arr):
    arr.reverse()
    return arr

def get_middle(s):
    length = len(s)
    mid = length // 2

    if length % 2 == 0:
        return s[mid - 1:mid + 1]
    else:
        return s[mid]

def reverse_words(text):
    str_list=text.split(" ")
    result = []
    for i in str_list:
        result.append(i[::-1])
    return " ".join(result)

def solution(nums):
    if not nums:
        return []
    return sorted(nums)

def break_chocolate(n, m):
    if n == 0 or m == 0:
        return 0
    return n * m - 1

def is_anagram(test, original):
    return sorted(test.lower()) == sorted(original.lower())

def series_sum(n):
    if n==0:
        return "0.00"
    if n==1:
        return "1.00"

    res = 1
    divisor = 4
    for i in range(n-1):
        res += 1/divisor
        divisor += 3

    final = str(round(res, 2))
    if len(final.split(".")[1])==1:
        return final + "0"
    return final

def find_short(s):
    s=s.split()
    lenghts=[]
    for i in s:
        lenghts.append(len(i))
    return min(lenghts)

def maskify(cc):
    if len(cc) <= 4:
        return cc
    res = ""
    for i in range(len(cc)):
        if i < len(cc) - 4:
            res+="#"
        else: res+=cc[i]
    return res

def enough(cap, on, wait):
    available = cap - on
    
    if available >= wait: return 0
    return wait - available

def xo(s):
    s = s.lower()  
    return s.count('x') == s.count('o')

def validate_pin(pin):
    return (len(pin) == 4 or len(pin) == 6) and pin.isdigit()
