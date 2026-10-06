def max_multiple(divisor, bound):
    return bound - (bound % divisor)

def divisible_by(numbers, divisor):
    return [x for x in numbers if x % divisor == 0]

def fake_bin(x):
    final=""
    for i in x:
        if int(i) < 5:
            final+="0"
        else: final+="1"
    return final