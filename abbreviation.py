# Convert a phrase to its acronym.

# Techies love their TLA (Three Letter Acronyms)!

# Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).

# Punctuation is handled as follows: hyphens are word separators (like whitespace); all other punctuation can be removed from the input.

# For example:
# As Soon As Possible - ASAP
# Liquid-crystal display - LCD
# Thank George It's Friday! - TGIF



import string
def abbreviate(words):
    mylist = []
    newwords = ""
    for word in words:
        words = words.replace("-", " ")
    for punctuation in string.punctuation:
        words = words.replace(punctuation, "")
    mylist = words.split()
    for k in mylist:
        newwords += k[0].upper()
    return newwords


print(abbreviate("Liquid-crystal display"))