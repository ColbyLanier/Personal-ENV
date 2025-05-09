---
Temperature: 5
Workspace: "[[3-Algorithms]]"
Progress: 0
NoteLevel: ABST
Importance: 3
NoteType: NOTE
Abstraction: 25
---

A reduction is a way to transform one algorithms input into a valid input for another algorithm. The purpose of this is to claim that any NP-complete Algorithm could not be reduced (in polynomial time) to a lossless reduction in a P (P dne NP) algorithm. This is because it would mean that the NP-complete algorithm could be solved in polynomial time (poly time reducer, poly time alg, poly time verifier) and thus P=NP.

The reduction needs to map an arbitrary instance of the reduction-from algorithm (known NP-Complete) to any specific instance of the reduction-to algorithm (suspected NP-Complete). 