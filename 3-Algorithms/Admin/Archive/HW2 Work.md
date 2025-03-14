---
noteType: goal
tags:
  - goal
  - HW2
progress: 100
target: 100
deadline: 
timescale: 
completed: true
parent: 
taskrefs: 
created_at: 2025-02-27T17:01:10-05:00
workspace: 3-Algorithms
status: Refining
COTs:
  - "[[Formatting Pass]]"
Workspace: 3-Algorithms
---
>[!multi-column]
>
>>[!blank-container]
>>**Completed:** `INPUT[toggle:completed]` 
>
>>[!blank-container]
>>**Timescale:** `=this.timescale`

```meta-bind
INPUT[progressBar(title('Progress'), minValue(0), maxValue(100)):progress]
```

> [!success]- Spoils of the Conquest
> 1. 

> [!failure]- Weapons of the Adversary
> 2. 

## Sub Goals:
- [ ] Lemmas
- [ ] Inductive Hypothesis
- [ ] Inductive Step
- [ ] Format
- [ ] Import to overleaf
****
### Lemma: Quick Factorization
The median factor of a number is $\sqrt{ n }*\sqrt{n}$ and all others have at least one component smaller than $\sqrt{ n }$ (Asserted as trivial). Thus, we can find all factors of n in $O(\sqrt{ n })$ time by iterating from 2 to $\lfloor \sqrt{ n } \rfloor$. For any divisor we find (in constant time), we pair it with its inverse. Any divisor d has a counterpart n/d. Because all factors are guaranteed to have one component in this range, and we leverage this component to find the component outside the range, we find every single factor in $\sqrt{ n }$ steps.

### Lemma: Persistent Factorization
Because the optimal solution for a child process of length $\frac{n}{d}$ is already stored, we do not need to recompute its factorization. Therefore, the $O(\sqrt{ n })$ cost is only incurred on the parent level and does not scale with recursive depth

### Lemma: Quantum Variable
A number n has k pairs of factors. Using Quick Factorization, we know the number of factor pairs is $1 < k \le \sqrt{ n }$. Almost all numbers have many fewer than $\sqrt{ n }$, but I do not need to appeal to this fact. I assume the stronger claim that every n has $\sqrt{ n }$ factors through quantum superposition. If I can prove that my algorithm still runs in O(n) time under these conditions; it must necessarily run O(n) normally.

### Lemma: Child size guarantee
Because Quick Factorization iterates from 2, we guarantee that the size of its resulting subproblem is at most n/2. This is well within the bounds of the inductive hypothesis. 
In a situation n=k+1; the question of $\frac{k+1}{2} < n$ is proven by a substitution $\frac{k+1}{2} < k+1$. This is trivially tautological for $k>0$.

## Algorithm
We can use a modified Rod Cutting algorithm to solve this problem. The key distinction being that our 'cuts' are done with division rather than subtraction.

Step 1:
Factor n using the Quick Factorization algorithm in $O(\sqrt{ n })$ time. Because we only have to do this once (Persistent Factorization), the cost is nominally consumed by the $O(n)$ runtime constraint. Return example: $12 = [(2, 6), (3, 4)]$

Step 2:
Calculate the base score for a number of this size. This is done through a constant time lookup of t(n).
Partial Recurrence dp(n) = max(t(n), ...

Step 3:
iterate across our array of factor pairs fp returned by Step 1 to find the max.
Partial Recurrence $\max([v$ for v in $\max(dp(fp[i][0]), dp(fp[i][1]))])$




## Inductive Hypothesis
Assume that for any number $1 \le i \le n$, the provided algorithm splits it into a set of factors where $f_{{0}} *f_{1} * f_{2}* \dots*f_{x}=i$ and $\sum^{x}_{0}v(f_{x})$ is maximized compared to all sets of i's recursive factors F. This is done in O(n) time assuming that the algorithm has already been run on all numbers $1 \le x \le i$ and their optimal solutions have been cached.

## Base Case
n=1
Quick Factor takes 1 step
Checking t(1) takes 1 step
1 cannot be split so there are no children max's to account for
Runs in O(1) time

even though t(1)=0, it is still maximized as it is $\ge$ max(F). Every element of F has a t of 0 (asserted trivially)

## Inductive Step
n=k+1
Quick Factor runs in $O(\sqrt{ k+1 })$ (asserted trivially)
Checking t(k+1) takes 1 step
Create a set of $\sqrt{ n }$ child processes (Quantum Variable) of size $\le\frac{k+1}{2}$ (Child size Guarantee).
Because $\frac{k+1}{2} < n$ (Child size Guarantee), we have cached solutions 