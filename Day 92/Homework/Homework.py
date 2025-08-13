def capitalize(s):
    even = [s[i].upper() if i % 2 == 0 else s[i] for i in range(len(s))  ]
    odd = [s[i].upper() if i % 2 != 0 else s[i] for i in range(len(s))  ]
    return ["".join(even),"".join(odd)]


def no_odds(values):
    return [x for x in values if x%2 == 0]


def check_exam(arr1,arr2):
    score = 0
    for i in range(len(arr1)):
        if arr2[i] == "":
            score += 0
        elif arr2[i] == arr1[i]:
            score += 4
        else: score-= 1
    if score < 0:
        return 0
    return score


def digits(n):
    return len(str(n))



def in_asc_order(arr):
    for i in range(len(arr) - 1):
        if arr[i] > arr[i + 1]:
            return False
    return True


def factorial(n):
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result


