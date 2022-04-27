from datetime import date
import copy

# Dummy data
Users = [
    ["Aayush",   [date(2022, 5, 19), date(2022, 5, 30)],   "Hatchback"],
    ["Jamsheed", [date(2022, 5, 10), date(2022, 5, 19)],   "Electric"],
    ["Abishek",  [date(2022, 5, 10), date(2022, 5, 19)],   "Electric"],
    ["Yuvia",    [date(2021, 12, 31), date(2022, 4, 10)],  "SUV"],
    ["Paul",     [date(2021, 12, 31), date(2022, 6, 10)],  "Luxury"],
    ["Ash",      [date(2022, 5, 21), date(2022, 5, 30)],  "Electric"]
]

Cars = [
    ["Ellara", [date(2022,5,10), date(2022,5,30)], "Sedan"], 
    ["Tesla", [date(2022,4,10), date(2022,7,30)], "Electric"], 
    ["Tesla X", [date(2022,5,11), date(2022,7,30)], "Electric"],
    ["Porsche", [date(2022,1,11), date(2022,5,11)], "Luxury"]
]

Types = ["Sedan", "SUV", "Hatchback", "Luxury", "Electric"]

Priority = {
    "Sedan": [5, 1, 4, 3, 2],
    "SUV": [3, 5, 1, 4, 3],
    "Hatchback": [4, 2, 5, 1, 3],
    "Luxury": [3, 4, 1, 5, 2],
    "Electric": [4, 2, 1, 3, 5]
}

# Given a date, it will showcase all cars available during those dates
def available_cars(date):
    start_date = date[0]
    end_date = date[1]
    result = []
    for car in Cars:
        car_start_date = car[1][0]
        car_end_date = car[1][1]
        if car_start_date <= start_date and end_date <= car_end_date:
            result.append(car)

    return result

# Given a user personna, the function will return the cars available ordered by the type
def matches(user):
    name = user[0]
    dates = user[1]
    car_type = user[2]
    priorities = Priority[car_type]
    available = available_cars(dates)

    for car in available:
        ctype = car[2]
        car[2] = priorities[Types.index(ctype)]

    available.sort(key=lambda x:x[2], reverse=True)
    print("The following are the available cars for "+ name + ":")
    for car in available:
        print(car[0])
