#Function 1 - hello world
# უნდა დავაბრუნოთ hello world!
def greet():
    return "hello world!"


def count_sheeps(sheep):
    # დაგვიბრუნებს sheep-ს და დაათვლის
    return sheep.count(True)



def no_space(x):
    # space ჩაანაცვლებს x-ით
    return x.replace(" ", "")



def double_integer(i):
    return i*2



def greet(name):
    return "Hello, {} how are you doing today?".format(name)



def boolean_to_string(b):
    return str(b)



def basic_op(operator, value1, value2):
    if operator == "+":
        return value1 + value2
    elif operator == "-":
        return value1 - value2
    elif operator == "*":
        return value1 * value2
    else:
        return value1 / value2




def litres(time):
    return int(time * 0.5)



def century(year): 
    #აქ ჩვენ დაგვიბრუნებს წელს შემდეგ დაუმატებს 99-ს და გაყოფს 100-ზე
    return (year + 99) // 100




def digitize(n):
    starting_str = str(n)
    reversed_str = starting_str[::-1]

    res_list = []

    for i in reversed_str:
        res_list.append(int(i))

    return res_list




def maps(a):
    saver=[]
    for i in a:
        saver.append(i*2)
    return saver






def lovefunc( flower1, flower2 ):
    if flower1 % 2 == 0 and flower2 % 2 == 1:
        return True
    elif flower1 % 2 == 1 and flower2 % 2 == 0:
        return True
    else:
        return False




def sum_array(a):
    return sum(a)



def total_pages_to_copy(n, m):
    return n * m

total_pages = total_pages_to_copy(n, m)
print(f"You need to copy a total of {total_pages} pages.")




def make_upper_case(s):
    return s.upper()
num1 = make_upper_case(s)
print(num1)




def are_you_playing_banjo(name):
    return f"{name} plays banjo" if name.lower().startswith('r') else f"{name} does not play banjo"





def abbrev_name(name):
    first, last = name.split()
    return f"{first[0].upper()}.{last[0].upper()}"
