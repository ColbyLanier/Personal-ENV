---
noteType: goal
tags: goal
progress: 100
target: 100
deadline: 
timescale: 
completed: true
parent: 
taskrefs: 
created_at: 2025-02-28T10:25:54-05:00
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
## Commentary:

Can we assume that the probability that a game is high scoring is computed in constant time?


No, you may need to explain why computing the probability can be done in constant time. A hint is to consider how you can ensure you don't have to compute the same sums over and over again.
\subsection{Lemma: Bigger they are; Harder they fall}
It seems strange that the probability Purdue scores 100 points is positively correlated with relative opponent strength. Rather than dunking on losers, it seems Purdue is determined to take points from the rich and give to the poor (Asserted Trivially).