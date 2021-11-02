#include <iostream>
#include <vector>
#include <chrono>

using std::chrono::duration;
using std::chrono::high_resolution_clock;
using std::chrono::milliseconds;

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
    auto t1 = high_resolution_clock::now();
    int chalk[] = {3, 4, 1, 2};
    std::cout << chalkReplacer(chalk, 25) << std::endl;
    auto t2 = high_resolution_clock::now();
    duration<double, std::milli> elapsed = t2 - t1;
    std::cout << elapsed.count() << "milliseconds";
}