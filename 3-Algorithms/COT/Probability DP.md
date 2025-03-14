---
Temperature: 5
Workspace: "[[3-Algorithms]]"
Progress: 0
NoteLevel: COT
Importance: 3
NoteType: NOTE
Abstraction: 25
Parent: "[[2025-03-13]]"
---
Rather than using a max or a min function to choose and optimal subproblem, if what is 'optimal' is instead decided by chance, we can substitute a quantum probe.  By using $P(x)*(1+DP()) + (1-P(x))*DP()$ we can simultaneously take both paths. The combined probability of x happening (and giving us +1 score) vs x not happening is 1. 