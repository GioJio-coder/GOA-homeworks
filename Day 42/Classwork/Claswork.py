dict = {
    "name": "giorgi",
    "surname": "jioshvili",
    "academy": "goa",
    "fav-color": "black",
    "city": "Tbilisi",
    "age": "13",
    "fav-programming-lang": "HTML"
}
print(dict)
print(dict["name, surname, academy, fav-color, city, age, fav-programming-lang"])


dict1 = {
    "brand": "BMW",
    "model": "e92",
    "year": "2010",
    "engine": "3.0",
    "count of cilindres": "8"
}
print(dict1.keys())
print(dict1.values())
print(dict1.item())

for key, value in dict1.item():
    print(f"key is {key} and value is {value}")