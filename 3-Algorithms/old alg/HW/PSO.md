---
created_at: 2025-01-22T13:48:16-05:00
modified_at: 2025-02-10T18:32:43-05:00
---
#coding/algorithm 
coin splitting: have n coins split into two piles of k and n-k. recursive split with running sum (sum of every pile as you move down).
because no split method is made we can assume it always results in the same number with different splits.

IH: assume s(n)= n(n-1)/2 for all k
Base Case: S(1)=0 (cannot be split)
IS: s()

$S=x*y$
f(n)=1+f(n-1)+n-1

s(n)=k(n-k)+s(k)+s(n-k)
s(n+1) = s(k) + s(n+1-k)

n planets
dark matter total = k 

starting planet must have more dark matter than it takes to travel to next planet. then remaining dark matter plus new dark matter must be greater than si

total dark matter = total distance

sum d = sum i