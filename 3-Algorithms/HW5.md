---
Temperature: 5
Workspace: "[[3-Algorithms]]"
Progress: 0
NoteLevel: ABST
Importance: 3
NoteType: NOTE
Abstraction: 25
---
Persona: University theoretical Algorithms professor counseling his favorite student about office hours. You are an expert in all things divide and conquer, dynamic programming, greedy algorithms, and max flow/min cut. You enjoy the theory and philosophy of algorithms and want to foster deep learning, while directing the student through his thought process. This is a discussion about algorithms and theoretical computer science. These questions exist to be solved, but also to be explored, extracted, and understood. confirm if you can read my user custom instructions relating to git based conversational control

![[Pasted image 20250408201105.png]]
![[Pasted image 20250408202411.png]]

Problem 2

Lemma 1: Short Kings
By the problem text, it is merely the number of cranes and/or bulldozers that matter, not the height of any particular unit. Thus, we should consider the machine in increasing height order, prioritizing the smallest units first. In order to accomplish this, the algorithm begins with sorting both lists in ascending order, paying 2nlogn steps. 

Lemma 2: Min Height
Because the machines do not continue to take up capacity after they have passed through, we do not need to consider traditional flow. However, the capacity of each road segment still restricts access to future nodes. Thus, the lowest capacity edge in a path restricts its pseudo-flow for any given iteration, but it does not propagate to the global system.

Lemma 3: The Bigger They Are
Applying the transformation of 1/x to every edge weight in the graph enables the use of black-box shortest path algorithms. Running Dijkstra's on the initial graph would create bottlenecks, but the inverted graph instead seeks the highest capacity edges, maximizing throughput. Because Dijkstra's operates without any mechanical changes, I assert its correctness and runtime of O(ElogV) with a binary heap to be well known.

Lemma 4: Logging Dijkstra's

There will be an additional field returned for each element along with its path length. This variable will track the minimum cut of the path from the source node, calculated as follows. If the node its the source return MAX_INT or infinity. When an edge is added to the path tree, set the newly connected node's minimum cut to min{parent minimum cut, 1/(edge weight)}. This additional logging requires an additional array access (parent min cut), a division, and a min operation per edge. This makes the total runtime 3E+ElogV, of which ElogV trivially subsumes to preserve the well known O(ElogV) runtime.

Dijkstra's is not wholly unmodified, but the change made is read only. It exists as a wholly containerized system, neither referenced by or modifying any outside process. Therefore, it does not compromise the correctness of Dijkstra's.

Lemma 5: Range Based Binary Search
If there is an array containing non-adjacent values, we can still binary search on the ranges between values in O(logn). Create a integer x and compare it with the n/2 element of the array n. If x=n/2, return index n/2 if x is larger compare it to the element (n/2)+1, if larger than recurse on range (n/2)+1 ... n. if smaller compare to element (n/2)-1, if smaller recurse on range 0 ... (n/2)-1. In either case, if x is between the n/2 element and the adjacent element return the left posts index. Always returning the left post ensures that we know how many elements of n are less than x. If x is smaller than the smallest element, return 0; greater than largest element return n. Because the only difference from standard binary search is one more potential array access, a constant time operation, the total algorithm incurs at most logn extra steps. This brings the total running time to logn+logn=2logn $\in O(\log n)$.

Algorithm:
Sort the list of Bulldozers and the list of Cranes (in-place) for 2nlogn $\in O(n\log n)$ steps. Run Logging Dijkstra's from S and T respectively for 2(3E+ElogV) $\in O(E\log V)$ steps. This leaves us with two lists containing the minimum cut of the most spacious route from source, one for bulldozers and the other for cranes. These arrays are indexed by node id (well known Dijkstra's behavior), thus $B[i]$ and $C[i]$ reference the same node, but may have different values. Indexing across values 0 < i < n, we consider each nodes combination of capacities (create variables a = -1 and b = 0). Run Range Based Binary Search twice to identify how many elements* are smaller than the capacity $M[i]$. The elements* in question are the sorted bulldozer or crane array respectively; plus one (accounting for 0 indexed array). Take the min of the two returns, that is the number of pairs possible (trivially). if that number is > b, b=pairs and a=i. After this iteration is done, the total cost is 2Vlogn+cV $\in O(V\log n)$. Return a, the index of the node which has the largest number of possible crane/bulldozer pairs.

Problem 3

Lemma 1: Hard Cap
Within the flow network, the capacity of the edges connecting the source and sink to the empty and wooded tiles (respectively) serve a critical function. Because flow can never exceed capacity, the edge acts as an implicit min function between two states. If the burden of fences becomes greater than the cost of simply removing the tree, the edge will hit capacity instead. Thus, we can assume that any sinking edge at capacity represents a spot we are better off removing the tree outright. Similarly, a sourcing edges flow represents the burden of required fences. If a plot requires an excess of protection, the edge will hit capacity and signal that a tree should be planted in that plot.

