num = 10
try:
    num = int("Hello")
except  ValueError  as e:
    print(f"დაფიქსირდა ValueError: {e}")



def get_user_input():
    try:
        name = input("შეიყვანეთ თქვენი სახელი: ")
        if not name:
            raise ValueError("სახელი უნდა შეიცავდეს მხოლოდ ასოებს!")

        print(f"მომხმარებელი: {name}")

    except ValueError as e:
        print(f"შეცდომა: {e}")

    except Exception as e:
        print(f"უცნობი შეცდომა: {e}")

get_user_input()