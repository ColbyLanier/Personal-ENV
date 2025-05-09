---
Temperature: 5
Workspace: "[[3-Algorithms]]"
Progress: 0
NoteLevel: IMP
Importance: 3
NoteType: NOTE
Abstraction: 25
---

# 1

## a
is independent set in p, this is true if p=np
**Open**

## b

## e
False

## f
False

## g
True

## h
True

## i
True

## j
False

# 3
Review max flow hw question 1, the easy one that I didnt score well on.
There will almost certainly be a question like this on the final

# 4
MST Calc
## a
This edge must be in the mst because it is the lightest edge in the cycle c > f> d

## b
edge A>B must not be in the mst because it is the heaviest edge across the cut acdf / beg

## c
edge df must not be in final because its heaviest on dfg cycle


# 6
Similar to the nth iteration of belman ford, we can run one final BFS (which has a well known O(E+V) runtime). If we detect do not detect a new augmenting path then the max-flow remains the same. (insert lemma)

If there is a new augmenting path discovered track which edge newly reaches its capacity, this edge may be included in the new minimum cut. Regardless, if the new augmenting path is found that implies the ending max flow has been incremented

# 7

## a
OPT(1) = take, receive value of coin

## b
$dp[j-1]$

## c
Bob collects this value because the cumulative value V must necessarily be divided between the two players (as all coins must be taken by base case). Thus V-a is Bob's cut where a is the value of all coins taken by Alice. Because Alice is operating optimally, a=OPT(n).

## d
if Alice takes coin $v_{n}$ then bob will have the opportunity to make a choice, and because he also acts optimally the value Alice will get is V-OPT(n-1) plus the value of the coin she just chose.

## e
OPT(j) = MAX{
V_n + (V-OPT(j-1))
OPT(j-1)
}

# 8
Invert each guest-list to create a list of meals that they would eat. This takes polynomial time with a worst case of $O(nk)$. 


# 9

