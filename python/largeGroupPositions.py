from datetime import datetime


def largeGroupPositions(s):
    solution = []
    start = 0
    end = 0
    charGroup = s[0]
    for i in range(len(s)):
        if charGroup != s[i]:
            end = i - 1
            if end - start >= 2:
                solution.append([start, end])
            start = i
            charGroup = s[i]
    end = len(s) - 1
    if end - start >= 2:
        solution.append([start, end])
    return solution


start_time = datetime.now()
print(largeGroupPositions("abcdddeeeeaabbbcd"))
end_time = datetime.now()
time_diff = (end_time - start_time)
execution_time = time_diff.total_seconds() * 1000
print(f"{execution_time} milliseconds")
