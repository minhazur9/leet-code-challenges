#include <iostream>
#include <vector>

int chalkReplacer(int chalk[], int k)
{
    const int maxStudents = sizeof(*chalk) / sizeof(chalk[0]);
    int index = -1;
    while (k >= 0)
    {
        index++;
        if (index > maxStudents)
        {
            index = 0;
        }
        k -= chalk[index];
    }
    return index;
}

int main()
{
    int chalk[] = {3, 4, 1, 2};
    std::cout << chalkReplacer(chalk, 25);
}