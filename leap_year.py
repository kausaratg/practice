# Given a year, report if it is a leap year.

# The tricky thing here is that a leap year in the Gregorian calendar occurs:

# on every year that is evenly divisible by 4
#   except every year that is evenly divisible by 100
#     unless the year is also evenly divisible by 400


def leap_year(year):
    if (year % 4 ==0):
        if (year % 100 == 0):
            if (year % 400 == 0):
                return True
            return False
        return True
    else:
        if (year % 400 == 0):
            if (year % 100 == 0):
                return False
            return True
        return False