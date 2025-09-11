def row_weights(array):
    # team1 = even
    # team2 = odd
    team1 = []
    team2 = []
    for index,item in enumerate(array):
        if index % 2 == 0:
            team1.append(item)
        else: team2.append(item)
    return (sum(team1),sum(team2))


def power_of_two(x):
    numbers = [1, 2]
    while numbers[-1] < x:
        numbers.append(numbers[-1]*2)
    return x in numbers


def predict_age(age_1, age_2, age_3, age_4, age_5, age_6, age_7, age_8):
    ages = [age_1, age_2, age_3, age_4, age_5, age_6, age_7, age_8]
    return int((sum([i * i for i in ages])**0.5)/2)


def greet(name): 
    r_name = name.capitalize()
    return f"Hello {r_name}!"


def sum_cubes(n):
    return sum(i**3 for i in range(1, n+1))
def sum_cubes(n):
    res = 0
    for i in range(1, n+1):
        res += i**3
    return res


def show_sequence(n):
    if n < 0: return f"{n}<0"
    if n == 0: return "0=0"
    return "+".join(map(str, range(n+1))) + f" = {n*(n+1)//2}"

def even_numbers(arr, n):
    return [x for x in arr if x % 2 == 0][-n:]

def is_sorted_and_how(arr):
    if arr == sorted(arr):
        return "yes, ascending"
    elif arr == sorted(arr)[::-1]:
        return "yes, descending"
    return "no"

def remove_duplicate_words(s):
    result = []

    for word in s.split():
        if word not in result:
            result.append(word)

    return " ".join(result)


def words_to_marks(s):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    sum = 0
    for i in s:
        sum += alphabet.index(i) + 1 
    return sum


def count_red_beads(n):
    if n > 2:
        return (n-1)*2
    return 0


def bumps(road):
    bump_count = road.count("n")
    if bump_count <= 15: return "Woohoo!"
    return "Car Dead"


def vowel_indices(word):
    return [x+1 for x in range(len(word)) if word[x].lower() in "aeiouy"]


def largest_pair_sum(numbers):
    return sum(sorted(numbers)[-2:])
