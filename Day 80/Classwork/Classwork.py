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

def divisors(integer):
    divisors = []

    for i in range(2, integer):
        if integer%i==0:
            divisors.append(i)

    if len(divisors) == 0:
        return f"{integer} is prime"
    return divisors

def remove_smallest(numbers):
    if numbers == []:
        return []
    lst = numbers
    minimal = lst.index(min(numbers))
    return lst[:minimal] + lst[minimal+1:]

def number(lines):
    return [f"{x + 1}: {line}" for x, line in enumerate(lines)]

