---
COTs: []
status: cot
created: 2025-02-27 19:41:26
parent: "[[Problem_2]]"
Workspace: 3-Algorithms
---
Rather than using a max or a min function to choose and optimal subproblem, if what is 'optimal' is instead decided by chance, we can substitute a quantum probe.

By using $P(x)*(1+DP()) + (1-P(x))*DP()$ we can simultaneously take both paths. The combined probability of x happening (and giving us +1 score) vs x not happening is 1. 
