'''
Attempt #2

Conclusion: Passes test case 1 and 2, but fails on test case 3.
'''
import sys
import math

def scheduleOptimization(intervals):
    last_end = -1
    ans = 0
    for end,start in sorted( (end,start) for start,end in intervals):
        if start >= last_end:
            last_end = end
            ans += 1

    print(last_end - len(intervals))
    return last_end - len(intervals)




n = int(input())
current_schedule = []


for i in range(n):
    j, d = [int(j) for j in input().split()]
    current_schedule.append([j, d])

scheduleOptimization(current_schedule)