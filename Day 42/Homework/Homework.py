# dictionary, dict არის ბიბლიოთეკა
# key value pair არის გასაღების და მისი მნიშვნელობის წყვილი
# ინდექსებს ჩვენ  ვერ ვიყენებთ dict-ში


dict = {
    "name": "giorgi",
    "surname": "jioshvili",
    "age": "14",
    "city": "tbilisi",
    "academy": "GOA"
}
print(dict.keys())

dict1 = {
    "name": "giorgi",
    "surname": "jioshvili"
}
print(dict.values())

dict2 = {
    "name": "giorgi",
    "surname": "jioshvili"
}
print(dict2.items())

dict3 = {
    "name": "giorgi",
    "surname": "jioshvili"
}
for key, value in dict3.items():
    print(f"{key}: {value}")



dict4 = {
    "name": "giorgi",
    "surname": "jioshvili"
}
key = "surname"
if key in dict4:
    print(f"Key '{key}' exists in the dictionary.")


dict5 = {
    "name": "giorgi",
    "surname": "jioshvili"
}
value = dict5.pop(username)


dict6 = {
    "name": "giorgi",
    "surname": "jioshvili"
}
print("Length of the dictionary:", len(dict6))


dict7 = {
    "name": "giorgi",
    "surname": "jioshvili"
}
dict7.clear()
print("Dictionary after clearing:", dict7)


dict8 = {
    "name": "giorgi",
    "surname": "jioshvili",
    "academy": "goa",
    "fav-color": "black",
    "city": "Tbilisi",
    "age": "13",
    "fav-programming-lang": "HTML",
    "goa-student": "True",
    "fav-car": "BMW",
    "fav-subject": "History"
}
print(dict8)