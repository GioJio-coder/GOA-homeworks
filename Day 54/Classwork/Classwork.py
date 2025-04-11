
num1 = float(input("enter numerator"))
num2 = float(input("enter denominator"))
try:
    print(num1/num2)
except ValueError:
    raise ValueError ("Denominator cannot bu equal to zero")
except:
    print("invalid input")
finally:
    print("operation complete")    



def square(num):
    return num**2

def apply_to_list(func, user_list):
    new_list = []

    for i in user_list:
        new_list.append(func(i))

    return new_list

print(apply_to_list(square, list(range (10))))  