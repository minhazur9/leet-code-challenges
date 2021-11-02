from datetime import datetime


def chalkReplacer(chalk, k):
    maxStudents = len(chalk) - 1
    index = -1
    while k >= 0:
        index += 1
        if index > maxStudents:
            index = 0
        k -= chalk[index]
    return index


start_time = datetime.now()
print(chalkReplacer([3, 4, 1, 2], 25))
end_time = datetime.now()
time_diff = (end_time - start_time)
execution_time = time_diff.total_seconds() * 1000
print(f"{execution_time} milliseconds")
