---
Temperature: 5
Workspace: "[[3-Algorithms]]"
Progress: 0
NoteLevel: IMP
Importance: 3
NoteType: NOTE
Abstraction: 25
---

```python
while (n > 1) {
    for (int i = 1; i <= sqrt(n); i++) {
        // O(1) operation
    }
    n = n / 2;
}
```

observations:
outer loop shrinks in a logarithmic fashion
inner loop performs sqrt(n) steps of work rather than the linear n steps from the original example

impact
similar to analyzing runtime across a recursive problem, we calculate the total output as a product of the per-layer work and the recursive depth
the layers of work has increased from $\log_{4}n \implies \log_{2}n$, but because any $\log_{x}n \in O(\log_{2}n)$ (check my understanding), we can apply the same geometric sum approach

(per layer work)(number of iterations) = $\sqrt{ n }\sum_{1}^{\log_{2}n}\left( \frac{1}{2^i} \right)$ = $\sqrt{ n }\left( \frac{1}{1-\frac{1}{2}} \right) = 2\sqrt{ n } \in O(\sqrt{ n })$

almost like unrolling and concatenating outer loop and then indexing across

```python
for (int i = 1; i <= N; i++) {
    for (int j = 1; j <= i; j *= 2) {
        // O(1) operation
    }
}
```

outer loop simple index to N
$\sum^{N}_{i=1}i$ (is i even correct here, it seems to imply the loop gets more expensive as it progresses, but this isnt true? this would be how I would approximate worst case insertion sort which is O(n^2))

inner loop
exponential growth is a bait, because it exponentially approaches a static upper bound, it actually completes in log(i) steps

$\sum^{N}_{i=1} \sum^{\log(i)}_{j=1}1$
$\sum^{N}_{i=1}\log(i)$
I don't know a formula or a simple way to resolve this sum, I am allowed one page of notes for my exam so sum formulas like these will be critical

```python
for (int i = N; i >= 1; i /= 2) {
    for (int j = 1; j <= i; j++) {
        // O(1) operation
    }
}

```
outer loop: simple decreasing log(n)
inner loop, simple incrementation (bounded by i rather than n)
if inner loop ran 1-n this would be a brainless O(nlogn) reply
n + n/2 + n/4 + n/8
number of operations follows geometric sum

$\sum_{i=0}^{\log n}\frac{N}{2^i}$
pull out N because its a constant factor

$N*\int^{\log n}_{0} (\frac{1}{2^i})  \, dx$

```python
for (int i = 1; i <= N; i++) { 
	for (int j = i; j <= N; j *= 2) {
		// O(1) operation 
	}		 
}
```
outer loop: simple increment
inner loop: exponential growth from i to n

very tricky mixup, i like this problem already
key distinction: rather than growing from 0 or N to a bound, we are scaling the lower bound and calculating the exponential distance to N

steps from i to n = log(n-i)
log(n-1), log(n-2), log(n-3)

```python
for (int i = 1; i <= N; i++) { 
	for (int j = N; j <= i; j /= 2) {
		// O(1) operation 
	}		 
}
```
$\sum^{N}_{i=1}\log i$