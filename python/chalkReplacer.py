def chalkReplacer(chalk, k):
    maxStudents = len(chalk) - 1
    index = -1
    while(k >= 0):
        index += 1
        if (index > maxStudents):
            index = 0
        k -= chalk[index]
    return index


print(chalkReplacer([3, 4, 1, 2], 25))
