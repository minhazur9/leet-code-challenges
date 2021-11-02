from datetime import date, datetime


def countAndSay(n):
    if n == 1:
        return "1"
    digitString = countAndSay(n - 1)
    result = ""
    counter = 0
    digitGroup = digitString[0]
    for digit in digitString:
        if digit != digitGroup:
            result = f"{result}{counter}{digitGroup}"
            digitGroup = digit
            counter = 1
        else:
            counter += 1
    result = f"{result}{counter}{digitGroup}"
    return result


start_time = datetime.now()
print(countAndSay(5))
end_time = datetime.now()
time_diff = (end_time - start_time)
execution_time = time_diff.total_seconds() * 1000
print(f"{execution_time} milliseconds")
