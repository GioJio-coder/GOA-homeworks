def row_sum_odd_numbers(n):
    start_num = 1
    res = []

    for i in range(1, n+1):
        ls = []
        for x in range(i):
            ls.append(start_num)
            start_num += 2
        res.append(sum(ls))

    return res[-1]

def printer_error(s):
    valid = "abcdefghijklm"
    res = 0

    for i in s:
        if i not in valid: res += 1

    return f"{res}/{len(s)}"

def reverse_words(text):
    str_list=text.split(" ")
    result = []
    for i in str_list:
        result.append(i[::-1])
    return " ".join(result)

def binary_array_to_number(arr):
    res = ""
    for bit in arr:
        res += str(bit)
    return int(res, 2)

def number(bus_stops):
    total = 0
    for on, off in bus_stops:
        total += on - off
    return total

def odd_or_even(arr):
    return "even" if sum(arr) % 2 == 0 else "odd"

def min_max(lst):
    if not lst:
        return None
    return [min(lst), max(lst)]