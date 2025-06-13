def get_middle(s):
    if len(s)%2 == 0:
        return s[len(s)//2-1:len(s)//2+1]
    else:
        return s[len(s)//2]

def is_isogram(string):
    string = string.lower()
    return len(string) == len(set(string))

def xo(s):
    s = s.lower()
    return s.count("o") == s.count("x")

def to_jaden_case(string):
    string = [i.capitalize() for i in string.split(" ")]
    return " ".join(string)

def find_short(s):
    s=s.split()
    lenghts=[]
    for i in s:
        lenghts.append(len(i))
    return min(lenghts)

def solution(text, ending):
    return text.endswith(ending)

def accum(st):
    return '-'.join(c.upper() + c.lower() * x for x, c in  enumerate(st))

def sum_two_smallest_numbers(numbers):
    numbers.sort()
    return numbers[0]+numbers[1]

def DNA_strand(dna):
    res = ""

    for base in dna:
        if base == "A": res+="T"
        elif base == "T": res+="A"
        elif base == "C": res+="G"
        else: res+="C"

    return res

def get_sum(a,b):
    return sum(range(min(a, b), max(a,b)+1))

def friend(x):
    res = []
    for i in x:
        if len(i) == 4:
            res.append(i)
    return res

def maskify(cc):
    if len(cc) <= 4:
        return cc
    res = ""
    for i in range(len(cc)):
        if i < len(cc) - 4:
            res+="#"
        else: res+=cc[i]
    return res

def add_binary(a, b):
    return bin(a + b)[2:]