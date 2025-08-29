def min_value(digits):
    unique_digits = set(digits)
    sorted_digits = sorted(unique_digits)
    result = int("".join(map(str, sorted_digits)))
    return result


def triangular(n):
    return n * (n + 1) // 2 if n > 0 else 0


def sum_of_minimums(numbers):
    return sum(min(row) for row in numbers)