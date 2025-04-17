def first_non_consecutive(arr):
    for i in range(1, len(arr)):
        cur_num = arr[i]
        prev_num = arr[i-1]
        
        if cur_num - prev_num > 1: return cur_num
    
    return None



def to_alternating_case(string):
    return string.swapcase()


def correct(s):
    return s.replace("5", "S").replace("0", "O").replace("1", "I")



def is_palindrome(s):
    s = s.lower()
    return s == s[::-1]



def bonus_time(salary, bonus):
    if bonus == True:
        return f"${salary*10}"
    return f"${salary}"



def final_grade(exam, projects):
    if exam > 90 or projects > 10: return 100
    elif exam > 75 and projects >= 5: return 90
    elif exam > 50 and projects >= 2: return 75
    return 0




def sum_str(a, b):
    if len(a) > 0 and len(b) == 0: return a
    elif len(a) == 0 and len(b) > 0: return b
    elif len(a) == 0 and len(b) == 0: return "0"

    return str(int(a) + int(b))




def expression_matter(a, b, c):
    combs = [
        a+b+c,
        a*b*c,
        (a+b)*c,
        a*(b+c),
        a+(b*c),
        (a*b)+c,
        a*b+c
    ]
    
    return max(combs)


def how_much_i_love_you(nb_petals):
    num=nb_petals % 6
    if num == 0: return "not at all"
    elif num == 1: return "I love you"
    elif num == 2: return "a little"
    elif num == 3: return "a lot"
    elif num == 4: return "passionately"
    elif num == 5: return "madly"




def reverse_list(l):
    return l[::-1]




def odd_count(n):
    return n // 2



def find_difference(a, b):
    v_a = a[0] * a[1] * a[2]
    v_b = b[0] * b[1] * b[2]
    
    if v_a > v_b: return v_a - v_b
    return v_b - v_a




def greet(language):
    all_lang = [ 
        ("english", "Welcome")
        , ("czech", "Vitejte")
        , ("danish", "Velkomst")
        , ("dutch", "Welkom")
        , ("estonian", "Tere tulemast")
        , ("finnish", "Tervetuloa")
        , ("flemish", "Welgekomen")
        , ("french", "Bienvenue")
        , ("german", "Willkommen")
        , ("irish", "Failte")
        , ("italian", "Benvenuto")
        , ("latvian", "Gaidits")
        , ("lithuanian", "Laukiamas")
        , ("polish", "Witamy")
        , ("spanish", "Bienvenido")
        , ("swedish", "Valkommen")
        , ("welsh", "Croeso")
    ]
    
    for key in all_lang:
        if key[0] == language: return key[1]
    
    return "Welcome"




def people_with_age_drink(age):
    if age < 14:
        return "drink toddy"
    elif age < 18:
        return "drink coke"
    elif age < 21:
        return "drink beer"
    else:
        return "drink whisky"
    




def two_sort(array):
    array.sort()
    
    res = ""
    for i in array[0]:
        res += i+"***"
    
    return res[:-3]



la_liga_goals = 43
champions_league_goals = 10
copa_del_rey_goals = 5

total_goals = la_liga_goals + champions_league_goals + copa_del_rey_goals




def solution(a, b):
    if len(a) > len(b):
        return b+a+b
    else:
        return a+b+a
    


def fix_the_meerkat(arr):
    arr.reverse()
    return arr



def find_multiples(integer, limit):
    return [x for x in range(integer, limit + 1, integer)]




def create_array(n):
    return list(range(1, n + 1))