def get_average(marks):
    return sum(marks) // len(marks)



def hoop_count(n):
    if n < 10: return "Keep at it until you get it"
    return "Great, now move on to tricks"



def reverse_words(s):
    return " ".join(s.split(' ')[::-1])



def cockroach_speed(s):
    return int(s*27.777778)



def switch_it_up(number):
    res = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"]
    return res[number]


def square(n):
    return n*n


def remove_every_other(my_list):
    new_list = []
    
    for i in range(len(my_list)):
        if i%2 == 0: new_list.append(my_list[i])
    
    return new_list



def twice_as_old(dad_years_old, son_years_old):
    res = (dad_years_old - 2 * son_years_old)
    
    if res < 0: return res*-1
    return res



def is_even(n): 
    return n % 2 == 0



def move(position, roll):
    return position + roll*2



def get_planet_name(id):
    if id == 1: return "Mercury"
    elif id == 2: return "Venus"
    elif id == 3: return "Earth"
    elif id == 4: return "Mars"
    elif id == 5: return "Jupiter"
    elif id == 6: return "Saturn"
    elif id == 7: return "Uranus"
    elif id == 8: return "Neptune"



def enough(cap, on, wait):
    available = cap - on
    
    if available >= wait: return 0
    return wait - available



def between(a,b):
    return list(range(a, b+1))



def is_uppercase(inp):
    return inp == inp.upper()



def say_hello(name):
    return "Hello, " + name



def monkey_count(n):
    return list(range(1, n+1))



def powers_of_two(n):
    return [2 **  x for x in range(n + 1)]


def human_years_cat_years_dog_years(h):
    if h == 1: return [1, 15, 15]
    elif h == 2: return [2, 24, 24]
    return [h, 24+((h-2) * 4), 24+((h-2) * 5)]






def is_palindrome(s):
    normalized = s.lower()
    return normalized == normalized[::-1]




def sum_str(a,  b):
    num1 = int(a) if a else 0
    num2 = int(b) if b else 0
    return str(num1 + num2)

