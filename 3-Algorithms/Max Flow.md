---
Temperature: 5
Workspace: "[[3-Algorithms]]"
Progress: 0
NoteLevel: IMP
Importance: 3
NoteType: NOTE
Abstraction: 25
---
int capacities > int flow

bipartiate mathcing

opt matching le opt flow
opt flow le opt matching

these two inequalities combine to prove opt matching = opt flow for reduction

max of nC augmenting paths where C is the capacity of the highest capacity edge. this is a case where all aug paths are of size 1 and all edges are cap C 

Capacity scaling: when looking for augmenting paths only consider edges in the residual graph of size > delta. if no path can be found set delta = delta/2. this creates logarithmic behavior