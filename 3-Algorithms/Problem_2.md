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
created_at: 2025-02-27T16:21:25-05:00
workspace: 3-Algorithms
status: Discussing
COTs:
  - "[[Probability DP]]"
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
- [ ] [[calculate p(ℓ) runtime]]
****

\section{Shorthand}
p(ℓ) | %gg -> Probability of gg; ℓ · $\frac{s_{i}}{\sum^{n}_{i'}{s_{i'}}}$.
%bg -> Probability of bg; 1-p(ℓ)
gg -> Good Game (high scoring)
bg -> Bad Game (low scoring)
wp -> With Presence (attended)
nore -> No Representation (did not attend)

ggwp -> high scoring attended
ggnore -> high scoring game missed
bgwp -> mistakenly attended bad game
\subsection{Lemma: A rich deck favors the player}
Similar to counting cards in blackjack, if a disproportionate number of low cards (bg) occur future odds are improved. This is because there is a necessarily higher percentages of gg in the pool. Normal case probability (ignoring team strength) = $\frac{m}{n}$; if a ggs occur and b bgs odds become $\frac{m-a}{n-a-b}$. If b becomes large, it drags on the denominator to improve odds (trivially asserted)

\subsection{Lemma: Final Countdown}
If there is ever a situation in which the number of remaining games $\ge$ number of remaining tickets; go to every game. There is no longer any opportunity cost to spending resources.

\subsection{Lemma: Bigger they are; Harder they fall}
It seems strange that the probability Purdue scores 100 points is positively correlated with relative opponent strength. Rather than dunking on losers, it seems Purdue is determined to take points from the rich and give to the poor (Asserted Trivially).

\subsection{Lemma: Expected Value}
The expected value of wp and nore can be defined as: p​(ℓ)×DP(j+1,ℓ−1)+(1−p(ℓ))×DP(j+1,ℓ). This is an alternative to a traditional max() or min() situation; because we cannot pick the result we account for both outcomes relative to their likelihood.

\section{Algorithm:}
I will determine wp or nore based on the expected values of each. Score = ggwp, thus I gain 1 point for each (guaranteed by problem text). No other result (ggnore, bgwp, bgnore) gains points.

DP Variables:
I need three parameters and two global constants. 

m and n are globally known
ℓ -> remaining gg
x -> remaining tickets (changed from k due to k+1 inductive step)
j -> remaining games (gg+bg)

dp(m, k, n) = max(
	p(ℓ)×(1+DP(j-1,ℓ−1, x-1))+(1−p(ℓ))×DP(j-1,ℓ, x-1),
	p(ℓ)×DP(j-1,ℓ−1,x)+(1−p(ℓ))×DP(j-1,ℓ,x)
)
Recurrence explanation: This formula can be broken apart into the established shorthand.

ggwp => DP(j-1,ℓ−1, x-1)
bgwp => (DP(j-1,ℓ, x-1)
ggnore => DP(j-1,ℓ−1,x)
bgnore => DP(j-1,ℓ,x)

a gg prefix consumes one ℓ, thus passing ℓ-1 to its child
a wp suffix consumes one x, thus passing x-1 to its child
any game consumes a j

Translated to the formula it reads:
dp(m, k, n) = max(
	%gg×(1+ggwp) + %bg×bgwp,
	%gg×ggnore + %bg×bgnore
)
dp(m, k, n) = max("Expected wp value", "Expected nore value")

\subsection{Inductive Hypothesis}
For a season of n games, m ggs, and k tickets the included expected value algorithm maximizes the number of ggwp. 

