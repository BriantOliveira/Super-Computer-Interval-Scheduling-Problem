'''
- Attempt #3 

Approach:
• Sort the intervals by duration (ie: with respect to their end points)
• Traverse through all intervals, if we get two overlapping intervals, then choose interval with lower end point since,
to ensure that we don't overlap with any other interval.
• Apply the same method to all the intervals and print all the intervals that satisfy the criteria.

Conclusion: 
This approach passes test case 1 and 2, but it also fails on test case 3. The output on test case 3 is 99998 instead of 7879.
'''

def maxIntervalsSchedule(intervals):
    optimal_solution = []
    end = -1
    
    # Lambda function to sort the list 
    # elements by second element of pairs (ie. duration)
    intervals.sort(key=lambda x: x[1])

    # End point of first interval
    end_point_of_first_interval = intervals[0][1]

    for i in range(1, len(intervals)):
        current_interval = intervals[i][0]
        current_last = intervals[i][1]

        
        # Check if current interval overlap with
        # end_point_of_first_interval, if not
        # then include this interval and update
        # the end point of last added interval
        if (current_interval >= end_point_of_first_interval & current_interval >= end):             
            optimal_solution.append([current_interval, current_last])
            end_point_of_first_interval = current_last

    result = len(optimal_solution)
    print(result)
    return result

n = int(input())
current_schedule = []


for i in range(n):
    j, d = [int(j) for j in input().split()]
    current_schedule.append([j, d])


maxIntervalsSchedule(current_schedule)