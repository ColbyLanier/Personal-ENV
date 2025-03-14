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
created_at: 2025-02-27T16:22:48-05:00
status: Refining
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

****
## Shorthand:
wee -> we expect elevation (parts with a positive height delta)
aah -> assumed atrophy in height (parts with a negative height delta)

all possible heights H must be necessarily be $\le \sum{wee}$ (Asserted Trivially; maybe make lemma). All valid heights v must be necessarily $\le\sum{aah}$. The upper bound is because values between it and k cannot return to the ground. 

info we have due to repeatable O(n) scans 
$[(\nabla, min, len), (\nabla, min, len), \dots]$
arr = linked list of valid indices for global information arr; initially $[0,\dots,n-1]$
```python
dp[h][v][i][arr]:
delta = arr[i][\nabla]
dh = h+delta
mh = h-arr[i][min]
if delta < 0:
	v = v+delta
if dh > v || arr[i][min] > h:
	return -\infty
child = max((array[i][len]+dp[h][arr.extract(i)])) for each i in arr
if dh == 0
	return max(arr[i][len], child)
return child

```
