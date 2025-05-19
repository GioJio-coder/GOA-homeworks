def get_count(sentence):
    vowels = "aeiou"
    return sum(1 for char in sentence if char in vowels)