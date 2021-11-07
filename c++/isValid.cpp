#include <iostream>
#include <stack>
#include <chrono>

using std::stack;
using std::string;
using std::chrono::duration;
using std::chrono::high_resolution_clock;
using std::chrono::milliseconds;

bool isValid(string s)
{
    stack<char> stack = {};
    for (char character : s)
    {
        if (character == '(' || character == '{' || character == '[')
            stack.push(character);
        else if (character == ')' && stack.size() > 0 && stack.top() == '(')
            stack.pop();
        else if (character == '}' && stack.size() > 0 && stack.top() == '{')
            stack.pop();
        else if (character == ']' && stack.size() > 0 && stack.top() == '[')
            stack.pop();
        else
            return false;
    }
    return stack.size() == 0;
}

int main()
{
    auto t1 = high_resolution_clock::now();
    const string solution = isValid("{[]}") ? "True" : "False";
    std::cout << solution << std::endl;
    auto t2 = high_resolution_clock::now();
    duration<double, std::milli> elapsed = t2 - t1;
    std::cout << elapsed.count() << "milliseconds";
}