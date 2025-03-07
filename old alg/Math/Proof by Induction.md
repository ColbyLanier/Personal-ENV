---
created_at: 2025-01-16T07:45:08-05:00
modified_at: 2025-02-10T18:32:55-05:00
---
#coding/algorithm 
prove a base case and a logical engine that scales truth

if F(1) is true and F implies F(k+1) then we can establish that the whole series is determinable as true or false

three components

Inductive Hypothesis: what you assert to be true (F(n) is true)
Base Case: F(1)
Inductive step: F(k) -> F(k+1)

interesting comparison to a line of dominos, first domino is base case and they knock each other over as an inductive step

>[!info]
>prove the sum of i2^i from i=1 to n is equal to (n-1)2^(n+1)+2
>base case i=1, sum = 2 equation = 2
>sum of i2^i from i=1 to k+1 <=> i2^i to k + (k+1)2^(k+1)
>since in the base case we proved equivalence we can now substitute the sum
>(k+1)2^(k+1)+2+(k+1)2^(k+1) => 2k2^(k+1)+2
>sub k+1 into rhs formula gives same answer so the induction holds

>[!info]
>prove n! > 2^n for n>3
>IH: n! > 2^n for n>=4
>BC: n = 4 (4! = 24, 2^4=16)
>IS: 
>(n+1)! > 2^(n+1)
>n!\*n+1 > 2^n\*2
>induction holds because n must be geq 4

inductive hypothesis is sometimes stronger than what is needed to prove the current equation, doesn't have to be a tight upper bound
>[!info]
>prove n! > 2^n
>IH: n! >= (n/e)^n

Almost circular relation between ih, base case, and is. we leverage our ih by substitution when solving our is.

when creating ih always assume youre working on a subset less than (or at least leq) n