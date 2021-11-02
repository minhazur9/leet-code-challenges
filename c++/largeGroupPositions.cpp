#include <iostream>
#include <vector>
#include <array>
#include <chrono>

using std::array;
using std::string;
using std::vector;
using std::chrono::duration;
using std::chrono::high_resolution_clock;
using std::chrono::milliseconds;

void printSolution(vector<array<int, 2>> solution)
{
    string result = "[";
    for (int i = 0; i < solution.size(); i++)
    {
        result += "[";
        for (int j = 0; j < 2; j++)
        {
            int num = solution[i][j];
            result += std::to_string(num);
            if (j < 1)
            {
                result += ",";
            }
        }
        result += "]";
    }
    result += "]";
    std::cout << result << std::endl;
}

vector<array<int, 2>> largeGroupPositions(string s)
{
    vector<array<int, 2>> solution;
    int start = 0;
    int end = 0;
    char charGroup = s[0];
    for (int i = 0; i < s.length(); i++)
    {
        if (charGroup != s[i])
        {
            end = i - 1;
            array<int, 2> positions = {start, end};
            if (end - start >= 2)
            {
                solution.push_back(positions);
            }
            start = i;
            charGroup = s[i];
        }
    }
    end - s.length() - 1;
    array<int, 2> positions = {start, end};
    if (end - start >= 2)
    {
        solution.push_back(positions);
    }
    return solution;
}

int main()
{
    auto t1 = high_resolution_clock::now();
    const vector<array<int, 2>> solution = largeGroupPositions("abcdddeeeeaabbbcd");
    printSolution(solution);
    auto t2 = high_resolution_clock::now();
    duration<double, std::milli> elapsed = t2 - t1;
    std::cout << elapsed.count() << "milliseconds";
}