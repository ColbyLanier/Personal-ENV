---
Temperature: 5
Workspace: "[[3-Algorithms]]"
Progress: 0
NoteLevel: IMP
Importance: 3
NoteType: NOTE
Abstraction: 25
Active: 0
---
# Question 1

## Love of the Game
I am arguing the problem is NP-Complete and thus I don't need to provide an algorithm. However I choose to do so anyway because it's interesting.

## Intuitive Algorithm
Sort the list in nlogn steps.

Create a DP recurrence relation along the the array and the running sum
```
DP[i, j] = 
case: j==t
	return 1
case: j>t
	return 0
default:
	max {
		DP[i+1, j], // Do Not add element n to list
		DP[i+1, j+s[i]], // Add element n to list
	}
```

This algorithm appears at first glance to be polynomial time, as the constant time work per cell would imply $\in O(nt)$. However, this is a pseudo-polynomial runtime similar to knapsack.

## Pseudo-Polynomial
The parameter $t$ scales linearly as a function of $\log(t)$ input bits. This implies that t scales exponentially as a function of its un-transformed value. An increase to t not only changes the number of rows in the dp table, but creates a multitude of additional viable paths. The DP recurrence will need to consider a multiplicatively larger problem space, as $t$ represents the ceiling of combinatorial explosion rather than a traditional input parameter.

# Set Cover Reduction
$SC \le_{p} SS$

## Instance Definitions
Set Cover:
	Universe $U={x_{1}, x_{2}, \dots ,x_{n}}$ where $10<x<100$
Subsets $S={s_{1}, s_{2},\dots,s_{m}}$ where $s \subset 2^U$
Integer $k$ where $k\le m$

Subset Sum
Set $U'={x_{1},x_{2},\dots,x_{n}}$ where $10<x<100$
Integer $t$

## Poly Time Verifier
Given candidate subset $s' \subset U'$, it can be verified in polynomial time by verifying $t=\sum_{s_{i} \in s'}s_{i}$. The existence of this verifier shows that Subset Sum $\in np$.

## Lemma 1: Bit Mask Flags
by using a convenient base (2k). We can reduce complex math problems to bit-strings that leverage arbitrary flags. If there is a guarantee that no summation can impact the little endian 0-bit (such as a set containing only even numbers), it can be used to store arbitrary information without compromising correctness.

## Lemma 2: Bit Mask Sets
by using a convenient base (2k). We can reduce complex math problems to bit-strings that clearly demonstrate set-theory. By creating a limit on the number of inputs to a bit-column, we can insure that it never carries. In a standard base-10 system a $n \choose 9$ from a set $\{1,1,1,\dots\}$ can never interfere with the tens column. 

# Reduction Algorithm
### $A=\left[1+\sum_{s' \in s_{i}}(2k)^{s'}\text{ for } s_{i} \in S \right]$
To clarify, create a new set $A=\{a_{1},a_{2},a_{3}\dots , a_{m}\}$. Each $a_{i}$ is a lossless encoding of the corresponding subset $s_{i}$. The encoding contains two steps, the flag and the set. All $s' > 10$ by problem definition, and $k \ge 1$ (as you cannot set cover with 0 sets). Thus, the minimum affected base in a base 2k system is $2^{11}$, well beyond the 'ones' place. Thus, Lemma 1 allows for the $1+$ portion of the transformation to monopolize the 'ones' place for bit flag usage. Furthermore, Because the base is 2k and all inputs are read through an exponent of the base, they can be represented in a bit string

## Example
I am using a specific-instance example for clarity, but all the transformations made here translate to any arbitrary input
$U=\{1,2,3,4,5\}$
$S=\{1,2,3\}\{3,4,5\}\{2,3,4\}$
$k=2$
$A=[\{1+4^1+4^2+4^3\},\{1+4^3+4^4+4^5\},\{1+4^2+4^3+4^4\}]$
If we consider $1=4^0$ the system can be rewritten as follows:
A=\[
111100,
100111,
101110
\]

### $A = A \cup [k-1 \text{ instances of }-2k^{x_{i}} \text{ for } x_{i} \in U]$
To clarify, add a flood of single-element sets to A containing the negative transformations of all universe elements. Notably these are not transformations of subsets, but of the individual numbers contained in U. Furthermore, because these instances are also being calculated via an exponent $>10$ they can neither interfere with the flag bit nor cause bit carries.

## Lemma 3: Universally Negative Unions
When two sets containing the same element are $\cup$'d, only one instance is kept. Consider the union of sets $S$ where $S' = \{[x],[x],[x],[x],\dots\}$. Mathematically, the output set $[x] =\sum_{i=0}^{n} x + \sum_{i=0}^{n-1}-x$. Thus, we can replicate the effect of a union in sums via cancelling out all but one duplicate.

### $t=k+\sum_{i=1}^{n}(2k)^{x_{i}} \text{ for } x \in U$
To begin to bridge the gap into Subset Sum, create it's parameter t equal to the sum of all elements in U (encoded) + k. This is analogous to a Subset Sum problem where $t=\sum U'$, a trivial base case where the return is simply every element in the set. The key distinction is in the $+ k$, which is the outcome of the Flag bits, but only if k subsets are chosen. Because each chosen subset provides a constant $+1$, the only way to achieve a yes instance of subset sum is for k encoded subsets to be chosen. 


## Lemma 4: Poly Time Translation
The polynomial time translation will calculate at most $mn+m$ additions (if all m subsets contain all n elements and an additional m for bit flags) to create A. A further $n+1$ additions to calculate t, and $nm+n$ exponential calculations. Regardless of any off-by-one style errors, it is clear that each step of this translation can be done in a greedy and isolated fashion. Each of the translation gadgets operate without reference to any combination-contingent factors that are the core of np (assuming p != np) algorithms.

# Yes -> Yes
Consider a yes instance of Set Cover. Definitionally, there must be a group of k subsets such that there is at least one element of every $x_{i} \in U$ in $\ge 1$ subsets. In this case, Subset Sum receives $t$ such that t = the sum of all encoded elements + the required number of subsets. Furthermore, Subset Sum receives an array of integers containing m encoded sets and $(k-1)n$ negative encoded values (k-1 per element). In this case, Subset Sum returns True by selecting the spanning subsets (encoded) and cancelling duplicates. Selecting the k spanning subsets will sum their Bit Flags to $+k$. By Lemma 3, Subset Sum can recreate the duplicate-eliminating union by selecting instances of the cancelling duplicates until only one instance remains. The result will be the sum of one instance of every $x_{i}$ and the trailing $+k$, which is the definition of t; $t=k+\sum_{i=1}^{n}x_{i}$

## Example Cont.
A=\[
111100,
100111,
101110
\]
t=2+15
Select A\[0\] and A\[2\]
111100 + 100111 = 211211
The sum of the bit flags is 2, $2=k$ so the state is consistent
Decoding the formula (pop bit flags):
$1*(2k)^{1}+1*(2k)^{2}+2*(2k)^{3}+1*(2k)^{4}+1*(2k)^{5}$
A duplicate has been identified, there are two $(2k)^3$, so we select an instance of $-(2k)^3$ from the cancelling stockpile to add to the subset sum
Thus, the final subset is $[1+(2k)^{1}+(2k)^{2}+(2k)^{3}],[1+(2k)^{3}+(2k)^{4}+(2k)^{5}],[-(2k)^{3}]$
$t=2+((4)^{1}+(4)^{2}+(4)^{3}+(4)^{4}+(4)^{5}) =k+\sum_{i=1}^{5}(4)^{i}$
This example is not load-bearing for my correctness argument and is only included for clarity

# No -> No
Consider the contrapositive of $\neg SC\to \neg SS \implies SS \to SC$. A yes instance of Subset Sum under this reduction has a few key restrictions.


## Formatting
It must select k encoded subsets, as there is no other vector to satisfy the $+k$ restriction. Thus, a yes instance of Subset Sum always implies a set of exactly k subsets for Set Cover. This does not by-itself guarantee correctness, but it does enforce formatting. The other formatting enforcement mechanism is Lemma 3. Because we have k-1 cancelling instances, the Subset Sum yes instance is robust to duplicates. In a worst case every selected subset contains a duplicate value $[1,2,3],[1,4,5],[1,6,7]$, but even this worst case is accounted for, cancelling all but the final union instance. 

## Lemma 5: Top Down
In contrast to vanilla Subset Sum, the main consideration in the post-translation yes instance is a controlled subtractive approach. Simply summing all available encoded sets (in a yes instance) must be greater than or equal to t. This is because the minimum yes instance is k disjoint sets where $k=m$, in this situation the total sum will be exactly t. In any situation where there are overlapping elements or subsets that are not chosen they increase the sum to a number $>t$. Thus, when considering duplicate cancellation it is to gracefully descend to t, not to create a janky rollercoaster to it.

## Correctness
The correctness of Subset Sum yes instance are enforced by Lemma 2 and the features of exponential encoding. Lemma 2 abuses base selection to ensure that multiples of one element do not overflow into other 'columns' of the bit mask. This observation allows us to freely cancel duplicate elements without concern for overflow. There may be a contrived combination of k, m, t, and S that allows for multiple cancel-blocks to sum to another column, but similar to a max-flow algorithm the global constraints smooth out these edge cases. In order for any cancel-shenanigans to occur, there must be a valid combination of encoded subsets to overcome the Formatting constraints. In a situation like this, undocumented behavior of cancel-blocks may provide a wacky greedy solution but does not remove them from the certificate umbrella. Furthermore, because the scaling of the columns is exponential, they are maximally isolated from each other. Again, there may be odd combinations where multiple duplicates of a little endian element total to a larger element value, but this can only alter greedy Subset Sum micro-procedure, not global correctness. In these situations, the soundness of the input (no duplicates intra-set) and the $+k$ constraint override greedy Subset Sum behavior, ensuring that any yes instance returned by Subset Sum must have come from a yes instance of Set Cover.

## Conclusion
Even accounting for the input constraint of $10 < x< 100$, Subset Sum remains NP-Complete. This is proven through it's polynomial time verifier and a rigorous reduction from Set Cover. The use of bit flags and exponential encoding allows for entire subsets to be considered as one integer, and the inclusion of cancel-blocks allows Subset Sum to recreate the duplicate-elimination feature of a Union. The translation between the two algorithms is done in polynomial time, meaning that any exponential factors must come from the algorithms themselves. If a Set Cover is a yes instance, it implies that the transformed input will be a yes instance under Subset Sum. Furthermore, if a Subset Sum is a yes instance (when given a properly transformed input), the Set Cover from which the input came is also implied yes. Occasionally strange greedy behavior may be exhibited when contrived parameters are used, but the greedy path still reaches the certificate accurately and can be safely abstracted. Subset Sum is NP-Complete because it is harder than Set Cover, a known NP-Complete problem (assuming p != np).

# Question 2

### Terminology
Traversable: $x \in [0,2,3]$
Impossible: $x \in [1]$
Castles: $x \in [2,3]$
source = s = enemy fortress = 3
sink = t = my town = 2-2
cell = node = vertex = $M[n][m]$

## Lemma 1: Cut Them Down
This problem structure naturally invokes a min-cut solution. The 'choke point' of a properly constructed flow from fortress to town will be found in the min cut. A properly constructed min-cut of a representative flow graph will highlight the cost-optimal arrangement of soldiers. Each edge in the min-cut should represent the cost of deploying a soldier to that tile

## Lemma 2: (un)directed
The well known algorithm to transform a directed graph into an undirected one is to split it into input and output nodes, creating a necessarily directional flow between them. Similarly, we can split each cell of the nxm matrix into a set of two nodes for input and output. This allows us to consider vertex weight (the capacity between input and output) as well as its macro-adjacency (input in-degree and output out-degree).

## Lemma 3: Cyclical Adaptation
We can greedily map infinite capacity edges from the out-node of every cell to in-nodes of all adjacent (traversable) cells. This does create cycles between adjacent nodes, allowing early ford-fulkerson iterations to meander strangely. However, due to the residual graph load balancing, none of these cycles will affect the end state (one of the two directions will have 0 flow) as only one direction can be productive (in the min-cut).
![[Pasted image 20250422161415.png]]

## Lemma 4: Infinite Obsolescence
Because the inter-cell edges are of infinite capacity (or MAX_INT), they can never be included in the final min-cut. The kingdom does not have the infinite resources to prevent the invaders from traversing the uncountably infinite real number space between tiles, and must instead control the cells themselves. Only intra-cell edges of capacity gh + (distance)g can be included in the min-cut due to the graph construction. The intra-cell chokepoint also isolates the cycles identified in Lemma 3 to harmlessly reside on the s xor t partition exclusively.

## Lemma 5.1: Contextual BFS
The correctness and runtime of BFS are well known to be $\in O(V+E)$. In this particular case, the graph presented to BFS will have $nm$ vertexes (one per cell) and $4nm-2n-2m$ edges (four per vertex minus the perimeter edges). This will result in a contextual runtime $5nm-2m-2n \in O(nm)$.

## Lemma 5.2: Logging BFS
In addition to creating a ledger of reachable cells, this BFS iteration will track the number of traversed edges (trivially done by passing ++parent_dist to children). This additional logging incurs at most $nm$ additional steps (constant time per child, $nm$ children). 

## Lemma 5.3: Transforming BFS
As BFS leaves a cell (immediately before return and after all processing), it transforms it. This is done after the return of all child processes, meaning it is absolutely isolated from BFS correctness.

Transform all edges into infinite capacity directed out-edges
Duplicate the node and its edges (invert direction to in-edges)
Connect the two nodes with an edge of weight $g_{h}+xg_{t}$ where x is the Logging BFS path distance (directed from in-edges node to out-edges node)

This transformation incurs 4 edge extractions (original undirected), 9 edge insertions (4 per node 1 connector), one vertex creation, and addition. This is clearly constant time work per-node $c_{i} \in [4,9,1]$, totaling to $Cnm$. This transformation is NOT performed on castles. The town only has an in-node and the fortress only has an out-node.

## Lemma 5.99 Composite BFS
To assemble all of the BFS gadgets, We begin with black-box BFS. 5.1 contextualization frames the runtime and solution space, but does not impact algorithmic correctness. 5.2 Logging is a read-only containerized logger, also not impacting correctness. 5.3 Transformations are much more complex, but due to the BFS guarantee that discovered nodes are not later relaxed, clever coding eliminates regression errors. Furthermore, The transformation is done after BFS executes all child processes on the 'negative edge' of the stack trace. Therefore, it cannot interfere with any black-box BFS behavior. In conclusion, BFS is run in a pseudo black box, prepended with logging and appended with transformation.

To assess the runtime of composite BFS the logging and transformation steps can be summed with contextual runtimes. $(5nm-2m-2n)+(nm)+(Cnm)=Cnm-2m-2n \in O(nm)$

## Graph construction
Read the input as a graph where all traversable nodes  are connected in an unweighted, undirected graph. non-traversable cells are not connected. Their information is preserved through the lack of any edge; no -> no mapping because cannot traverse an impossible tile when there is no access edge.

Run Composite BFS on this input graph from t.

After Composite BFS we are left with a 2nxm matrix in graph representation. Each cell has been broken into an in-node and out-node with a single interior edge with capacity equal to the cost of defense. The four circumbinary cells are cyclically connected (Lemma 4). To clarify, inter-node edges are always directed from adjacent out to adjacent in with infinite capacity. The enemy fortress is connected to adjacent traversable in-nodes by infinite capacity out-edges, the town is connected to adjacent traversable out-nodes by infinite capacity in-edges.

Run black-box ford-Fulkerson max-flow on the transformed graph. The min-cut of the max-flow graph will contain no infinite capacity edges (trivially asserted). The only edges which can be 'cut' are the intra-node edges connecting in to out. Each edge included in the min-cut is necessarily a cell that is cost-effective to defend. 

## Runtime
Max flow has a well known runtime of $O(VE^2)$ when using BFS to find augmenting paths. As established in BFS Lemmas, the worst-case edge count of this graph is $4nm-2n-2m$ and the worst-case node count is $nm$. However, on the transformed graph where max flow will run, there are twice the edges (out and in) and the intra-node edge. Furthermore, there are twice (-2 for castles) vertexes. Doing rounded math (always rounding up for worst case) leaves a runtime of $2nm*(8nm-4n-4m+nm)^2$. Disregarding linear n and m factors leaves $2nm*(9nm)^2=C *nm*(nm)^2 \in O(n^3m^3)$. This subsumes the runtime of Composite BFS and becomes the overall time complexity with respect to n and m. This is not a particularly pretty runtime, but it does assume that there are no impassible tiles in the system. Each impassible tile cuts the number of nodes by 1 and the edges by 4. After transformation each impassible tile cuts 9 edges and two nodes, a considerable improvement. However, there are no guarantees that any tile would be impassible, so it cannot be assumed for worst-case big O performance.

## Conclusion
Full proof of correctness has been exempted as per text of the problem. However, there are still many gadgets and global constraints on display. This algorithm is defined by its graph transformation, refining an undirected graph of traversable tiles which still initially encodes much information about routing and map structure. The transformed, directed, graph is a superstructure that encodes vertex weights through in and out nodes, and applies the creeping distance-based cost formula. Capacities naturally funnel towards the town, creating a scaling probability of min-cut. However, the graph still detects bottlenecks globally through robust max-flow guarantees.

# Question 3

# 3a
3SAT $\le_{p}$ HALFSAT

## Instance Definition
3SAT:
Variable Formula

HALFSAT:
Variable Formula

## Poly Time Verifier
Given a set of clauses S and a set of variable assignments A, it is trivially polynomial to linearly scan S to verify max 3 variables per clause, no negations, and other formatting. From that point apply variable assignments and verify that $\le \frac{1}{2}$ of assignments are true in another linear scan. Because each step of verifying the SAT $\le \frac{1}{2}$ the problem space, it is logarithmic. This conclusion is due to the comparison of two bool variables resulting in only one ($T \vee F \implies T$), thus each level of recursion results in half the number of variables left to compare. Because HALFSAT has a polynomial verifier it is $\in np$.

## Poly Time Reduction
Take an instance of 3SAT; 
For each variable $x_i$ in S, create two variables $x_{i}^t$ and $x_{i}^f$.
Wherever $x_{i}$ appears in 3SAT replace it with $x_{i}^t$, wherever $\neg x_{i}$ appears replace it with $x_{i}^f$.
The variable space has been doubled (2n), with each 3SAT variable corresponding to two HALFSAT variables. Furthermore, because $x_{i}^f$ is a non-negated variable, there will never be a negated variable after the transformation. Additionally, for each variable pair append the following clause to the CNF ($x_{i}^t \vee x_{i}^f$)

# Yes -> Yes
Consider a satisfiable 3SAT formula S.
There must be some combination of variable assignments that result in a true output. 
For each variable in satisfying assignment $x_{i}$:
if True assign $x_{i}^t$ = True and $x_{i}^f$ = False; if False assign $x_{i}^t$ = False and $x_{i}^f$ = True

## Correctness
Wherever $x_{i}$ appears in the 3SAT formula $x_{i}^t$ will perform identically, and therefore translate the satisfying assignment from 3SAT directly.
Wherever $\neg x_{i}$ appears in the 3SAT formula $x_{i}^f$ will perform identically. This is because it was inverted at assignment rather than at runtime. 
$x_{i}$ | $x_{i}^t$ | $x_{i}^f$ | $\neg x_{i}$
1 | 1 | 0 | 0
0 | 0 | 1 | 1

The only factor that could compromise the correctness guarantee from the 3SAT assignment would be the additional ($x_{i}^t \vee x_{i}^f$) clauses. However, because the two variables are always assigned opposing truth values under the 3SAT assignment these clauses are all satisfied.

Because both positive variables and negated variables are adapted identically, the 3SAT assignment must be applicable to the HALFSAT transformation. Furthermore, because  $x_{i}^t$ and $x_{i}^f$ must be assigned opposite truth values in the transformation, there can never be a situation where there are $\ge n$ true assignments.

# No -> No
To prove the no->no implication consider the contrapositive. If there is a yes instance of transformed HALFSAT, it must imply a yes instance in the original 3SAT. Because of the appended clauses, there can never be an assignment where both $x_{i}^t$ and $x_{i}^f$ are false. There could be a situation where both $x_{i}^t$ and $x_{i}^f$ are assigned to true, but this greedy decision will cause errors. Because only n variables can be assigned to true, if both variables in a pair are assigned to true, there must be a variable pair that is assigned both false. This is because the double-positive necessarily over-consumes a shared resource, starving some other variable pair. There are only enough resources for one of the two in a pair to be true. Thus, we can take the HALFSAT assignment and losslessly reconstruct 3SAT by following translation backwards.

## Conclusion
3SAT is a well known NP-Complete algorithm. Because HALFSAT can be verified in polynomial time, it is $\in np$. Furthermore, 3SAT can be translated into a viable HALFSAT input in polynomial time. Because this HALFSAT instance always returns the same value as 3SAT, if HALFSAT were to be solvable in polynomial time p = np. Thus, assuming p != np HALFSAT must be NP-Complete.

# 3b
HALFSAT $\le_{p}$ DUNGEON

## Poly Time Verifier
Using the set of provided keys, perform BFS across all accessible edges. If the treasure room is encountered return True, if all remaining doors cannot be unlocked, return false. BFS has a well known polynomial runtime.

## Poly Time Reduction
Consider a dungeon instance consisting of a line of rooms with the treasure at the end. Each room is connected to the next adjacent room (and only that room) with a set of one or more doors. Begin with an instance of HALFSAT comprised of multiple clauses containing non-negated variables. Create a dungeon with one room per clause ordered in a left to right array. Each variable in a clause is transformed into a door that progresses to the next room. This door is unlocked by the corresponding key (mapped 1:1 with the 2n variables). The t key limit is represented by the n assignment limit. If a variable is assigned true the adventurer has the corresponding key.

# Yes -> Yes
Consider a satisfiable HALFSAT formula and the set of n true variables. After applying the DUNGEON reduction an adventurer finds himself in the first room of the dungeon with a set of keys corresponding to each of the n variables. The adventurer can not carry any additional keys due to the t key limit, where $t=n$. The adventurer approaches the set of several doors to exit this room deeper into the dungeon. All of these doors lead to the same room, thus the adventurer only needs one key from his collection to match any of the available doors. Because the HALFSAT instance is a yes, there must be a variable to complete this clause, and thus the adventurer must have at least one key corresponding to at least one door. In the next room there are again a set of doors to progress. For each of the future rooms the process repeats, and because the HALFSAT formula must always have at least one variable satisfying each clause, the adventurer must always have at least one key to satisfy each room. The function ends when all clauses are satisfied, meaning the adventurer has toured every room in the dungeon and must have found the treasure.

# No -> No
To prove the no -> no implication consider the contrapositive. The adventurer has a static set of t keys ($t \le n$), which are not alterable during runtime. In order for the DUNGEON to be a yes instance, every room must be at least one door that matches a key in the static set. There is no way to progress to the next room without an appropriate key, and there is no way to 'find' or create additional keys once in the dungeon. Thus, if the adventurer is able to reach the treasure the key set must have a satisfying variable for every clause, the definition of a HALFSAT satisfying assignment.

## Conclusion
This reduction was not incredibly satisfying at first, as I thought the dungeon construction constraint was overly restrictive. In the problem text there is a far more graph-like layout, but a broad BFS based reduction would be convoluted. I realized that this was unnecessary as I learned more about reductions, such as the Subset Sum to Knapsack reduction where weight=value and required value=max weight. Having to only attack a thin vertical slice of possible dungeon layouts simplifies the reduction while still proving something meaningful about the DUNGEON problem generally. Regardless, DUNGEON is NP-Complete because it is $\in np$ due to the verifier and can be constructed with a polynomial time reduction from HALFSAT. If we were able to solve HALFSAT via a polynomial translation using a polynomial time algorithm then p=np. Assuming p != np thus necessitates that DUNGEON is NP-Complete.

# Question 4
https://chatgpt.com/share/68062717-0b24-8002-b9f9-2f8ad77510b1
ChatGPT made two critical errors in its reasoning process. First, ChatGPT made the assumption that you can only tackle the tower in ascending order, rather than being able to greedily select over all floors. This is an understandable assumption given the text of this weeks problem; the other instructions being given in the previous number tower problem. Secondly, it has taken a strange fixation with potions of $m_{i} < 1$. This is theoretically possible under this weeks program text, it is clearly not the intention of the problem. Both of these critical errors make the included solution incorrect.