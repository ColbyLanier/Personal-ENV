---
Temperature: 5
Workspace: 3-Algorithms
Progress: 0
NoteLevel: IMP
Importance: 3
NoteType: NOTE
Abstraction: 25ad
Parent: "[[Midterm_Prep_Root]]"
---
## Rules
Single page, front and back
handwritten

### Mandatory Includes
Log exponent rules
master theorem
knapsack
dp subproblems for runtime comparisons
l'hopitals rule for bound comparison


#### Cached resps for basic double loop runtimes
- **∑i=1N1=O(N)\sum_{i=1}^{N} 1 = O(N)∑i=1N​1=O(N)** → Basic counting.
- **∑i=1Ni=O(N2)\sum_{i=1}^{N} i = O(N^2)∑i=1N​i=O(N2)** → Example: Insertion Sort worst case.
- **∑i=1Nlog⁡i=O(Nlog⁡N)\sum_{i=1}^{N} \log i = O(N \log N)∑i=1N​logi=O(NlogN)** → Example: This problem!
- **∑i=1N1i=O(log⁡N)\sum_{i=1}^{N} \frac{1}{i} = O(\log N)∑i=1N​i1​=O(logN)** → Harmonic sum.
finite geo series:
∑i=0kri=1−rk+11−r\sum_{i=0}^{k} r^i = \frac{1 - r^{k+1}}{1 - r}i=0∑k​ri=1−r1−rk+1​

#### Prepacked Lemmas
I should have many of these prethought out so i can copy paste into problems
- runtime subsumption, $n+9999\log n \in O(n)$ 

#### Gimmicks
$\sum^{k+1}_{i=1}i=\sum^{k}_{i=1}i +(k+1)$
$\sum^{\infty}_{i=0}=1/1-x$
![](https://i.imgur.com/ijy8No1.png)
A function is in a set of big O, it is not equal to big o
$f(x) \in O(n^2) \neq f(x)=O(n^2)$
![](https://i.imgur.com/99Z7WYz.png)
![](https://i.imgur.com/G2yVyZM.png)
N choose c Formula