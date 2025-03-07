---
created_at: 2025-01-25T09:34:16-05:00
modified_at: 2025-02-10T18:32:41-05:00
---
#coding/algorithm 
1.
intuitively group functions into constant, logarithmic, polynomial, and factorial

j: $\frac{\log(n)}{n}$
b: $2^{\sqrt{ n }}$ # this was a mistake as I thought $\sqrt{ 2 }^n$ would be a decreasing function

h: $\sqrt{ n }(\log(n))^2$
e: $n*3^{\log(n)}$
c: $(\log(n))^{3}n$
a: $n^{2}\log (n)$
d: $\frac{n^{3}}{\log(n)}$

g: $n^{\log(n)}$
f: $e^n$
i: $\frac{n!}{2^n}$

compare adjacent indices. if $\lim_{ n \to \infty } \frac{f(x)}{g(x)} =\infty$ then f(x) > g(x)
j: $\frac{\log(n)}{n}$ # this is pretty clear as it is the only function to grow slower than log(n)
h: $\sqrt{ n }(\log(n))^2$ # $\sqrt{ n }$ dominates, only function to grow slower than linear time
c: $(\log(n))^{3}n$ # n dominates, grows in approximately linear time
e: $n*3^{\log(n)}$ # $3^{\log n}$ reduces to $\log_{3}\log n$ in comparisons. this was my favorite runtime to compare; very thought provoking.
a: $n^{2}\log (n)$ # $n^2$ dominates, grows polynomially
d: $\frac{n^{3}}{\log(n)}$ # $n^3$ dominates, grows cubically

+
g: $n^{\log(n)}$ # reduces to $(\log n)^2$ in comparisons, grows exponentially
f: $e^n$ 
i: $\frac{n!}{2^n}$


2.
runtime analysis
https://en.wikipedia.org/wiki/Triangular_number
a:
This function increments two variables j and i. j is monotonically increasing, but i follows the triangular number sequence. Because the comparator value i increases in a faster-than-linear fashion, I expect a complexity of > $O(n)$. Using the summation formula in the linked source we expect the iterations to stop upon the condition $\frac{i(i+1)}{2} \geq n$. I was tempted to use this summation formula to conclude the runtime was $O(n^2)$, but as this violated my hypothesis I reconsidered. Solving instead for n yields my final answer of $i^2 \geq 2n$ or $O(\sqrt{ n })$

b.
This function contains a simple incrementing outer loop, setting the minimum expected runtime to $O(n)$. For each iteration of the outer loop the variable k must reach j. k scales in an faster-than-linear fashion, narrowing the expected range to below $O(n^2)$. because k scales exponentially, our sum is $\sum_{0}^{n-1}\log n$ for my final answer of $O(n\log n)$

3.
a.
set of n-1 portals

what does it mean for a set of portals to lead to the same place, is this necessarily the same as every portal in a set leading to the same place, inclusive vs exclusive or

base case P(1) trivially works

inductive step could be used on sets of k > 2, but there exists a break in the inductive chain from the base case to these larger k values.

if we assume k = 1, the set of k+1 portals gives us two portals, our base case portal which leads to destination x and our second portal which leads to an undetermined location. If we remove one portal from our first set (containing only the base case) it will become an empty set. Adding the second portal to this empty set no longer confers any meaning to the destination of portal two because there are no other portals to determine its output. Because we can't prove the connection between the base case and any other portal, we cannot begin to prove the connection between that set of portals and the remaining n-2.

b.
the flaw in the argument is assuming that the same starting planet can be used for the set of k+1 planets. The assumption states that there is always 'a' starting planet, but not that any particular planet maintains this status between different values of k. 

The necessary condition for a planet to be a viable starting location is that the dark matter reservoir upon the planet is sufficient to reach the next planet in the ring, assume ${d}_{i}$ is the dark matter available on a planet and ${t}_{i}$ is the transportation cost to the next planet. Because the question specifies there is exactly enough dark matter, we know that $\sum^{n}_{0}{d}_{i}=\sum^{n}_{0}{t}_{i}$ but the distributions may cause problems. Assume planet x is a viable starting point for the ring of k planets such that $d_x$ = 2 and $t_x$ = 1. if we inject another planet y into this set (k+1 total planets) immediately clockwise from planet x with dark matter $d_y$ = 2, but it is quite far away; inflating $t_x$ to 3. Because the extra dark matter is offset by the extra travel cost, the sums remain in balance. However, planet x is no longer a viable starting location as $t_x > d_x$.

4.
player 390 can be used as a function call to split groups in two

Algorithm: Let player 390s abilities be represented by the function F(n) which accepts a set of players n and returns groups x and y. The algorithm first calls F(n) on the entire player pool followed by recursion on x, y, etc until the set numbers satisfy the condition $|\sum_{i\in G_{j}}v_{i}-\frac{1}{m}\sum^{n}_{i=1}v_{i}|\leq \beta$

IH: Given any set of n numbers, calling the function F(n) (Player 390) m-1 times to create a binary tree of depth $\log(m)$ will split the players into m rooms such that the conditions are satisfied and there will be time left over

base case: 
m=2
F(n) iterations = 1

F(S) trivially accomplishes goal given 390's guarantees
F(S) runs in <1 minute leaving time to lock rooms

IS:
for a set of rooms m+1 F(n) will need to be run $((m+1)-1)=m$ times
This will also leave at least one minute left over

Assume the algorithm works for m = $2^k$ groups, satisfying the condition in ≤ m minutes.

For $m+1=2^{k+1}$
After calling the function once we have two groups that can each be allocated m/2 rooms and (m-1)/2 minutes respectively. These abstracted micro-situations are proven by the IH as they are of size $\leq m$. Regardless, the m+1 total function calls still ensure this situation finishes in $\leq m+2$ minutes
