---
created_at: 2025-02-04T17:56:21-05:00
modified_at: 2025-02-10T18:32:37-05:00
---
#coding/algorithm 
Recursion is a fiddly system prone to stack inflation and unstable depths, but it provides a key advantage when splitting a problem into manageable chunks

In an array on n elements, the binary tree produced by that array will have a depth of logn; this is a critical observation.

when we find a way to include a logarithm in our runtime calculations we massively improve the scalability of the function.

to calculate the runtime complexity of such a recursive algorithm it is wise to think about work performed as  function of the work allocated to child nodes and the per-layer summarization of the parent

in [[Mergesort]], the children are allocated T(n/2) steps of work, and there is are n steps of work to merge the two child arrays together. Each level of the binary tree sums to these same n steps between all children of a certain depth. Therefore, because the height of the tree is log(n) and the total work done on each layer is n the total work is
$n*\log n$


generic runtime improvements often come from returning more information from the child processes such that the combining step is less intensive, often this is the factor that dominates runtime so from a big o perspective we can shrink the final runtime. Alternatively we can find ways to do less work through reduction in number of child processes by analytically eliminating comparisons that could never be optimal.