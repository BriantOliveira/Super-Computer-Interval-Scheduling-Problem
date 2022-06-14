
/**
 * Attempt #1 
 * 
 * The Goal -
 * In the Computer2000 data center, you are responsible for planning the usage of a supercomputer for scientists. 
 * Therefore you've decided to organize things a bit by planning everybody’s tasks. The logic is simple: the higher the number of calculations which can be performed, the more people you can satisfy.
 * 
 * Rules - 
 * Scientists give you the starting day of their calculation and the number of consecutive days they need to reserve the calculator.
 * 
 * For example:
 * Calculation	Starting Day	Duration
 * A	2	5
 * B	9	7
 * C	15	6
 * D	9	3	
 * Calculation A starts on day 2 and ends on day 6
 * Calculation B starts on day 9 and ends on day 15
 * Calculation starts on day 15 and ends on day 20
 * Calculation D starts on day 9 and ends on day 11
 * 
 * In this example, it’s not possible to carry out all the calculations because the periods for B and C overlap. 3 calculations maximum can be carried out: A, D and C.
 * 
 * Game Input -
 * 
 * Input
 * Line 1: The number N of calculations
 * The N following lines: on each line, the starting day J and the duration D of reservation, separated by a blank space.
 * 
 * Output
 * The maximum number of calculations that can be carried out.
 * 
 * 
 * Conclusion: 
 * This methods passes the test case 1, and test case 2, but fails on test case 3 (Large Number of Scientist), because it runs out of memory & the process times out because the solution is not optimized enough to handle test case 3.
*/

 let overlapMap = {}
 let overlaps = {}
 let overlapSet = new Set()
 
 const N = parseInt(readline());
 for (let i = 0; i < N; i++) {
     var inputs = readline().split(' ');
     const J = parseInt(inputs[0]);
     const D = parseInt(inputs[1]);
     
     // Built map for keeping track overlaps
     for (let x = J; x < J+D; x++) {
         // If overlaps is found we add the index of the calculation
         if (overlapMap[x]) {
             overlapMap[x].indexes.push(i)
         } else {
             // init case
             overlapMap[x] = {
                 indexes: [i]
             }
         }
     }
 }
 
 // Loop through overlap map and find overlapping calculations
 for (let entry in overlapMap) {
     let val = overlapMap[entry]
     if (val.indexes && val.indexes.length > 1) {
         overlapSet.add(val.indexes.join())
     }
 }
 
 
 let ans = {}
 let deductions = 0
 
 // Loop through overlap set
 overlapSet.forEach((set) => {
     // deconstruct the set back into an array 
     let arr = set.split(',')
 
     // For each overlapping calculation look for calculation we must remove
     arr.map((i) => {
         if (ans[i]) {
             ans[i]++
             deductions++
         } else {
             ans[i] = 1
         }
     })
 
 })
 
 console.log(N - deductions);
 