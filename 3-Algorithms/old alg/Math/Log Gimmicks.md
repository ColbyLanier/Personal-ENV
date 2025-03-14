---
created_at: 2025-01-23T07:54:24-05:00
modified_at: 2025-02-10T18:32:49-05:00
---
#coding/algorithm 
the height of a filled binary tree of dividing n will be logn
n -> n/2, n/2 -> n/4, n/4, n/4, n/4 -> 1, 1, 1, ...
each level of this tree cumulates to cn work
taking level work times tree height results in most splitting recursion being o(nlogn)


