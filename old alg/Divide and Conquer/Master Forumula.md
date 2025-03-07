---
created_at: 2025-02-04T18:00:53-05:00
modified_at: 2025-03-06T20:38:31-05:00
---
#coding/algorithm 
As discussed in [[Why recursion]], we can calculate the total work of a recursive function by multiplying the per-layer processing work by the height of the binary tree (logn). This is only true when the children are being divided into groups relative to n (n/2, n/4), but not special recurrence relations (n-1, $\sqrt{ n }$)

$T(n)=2T(n/2)+cn$
Hypothesis: $T(k) \le ck\log k$
Base Case: $T(2)=2T(1)+2$
Inductive Step: $T(k)=2T\left( \frac{k}{2} \right)+ck$
$2(c*\frac{k}{2}*\log\frac{k}{2})+cn$
$ck\log{k}-ck\log{2}+ck$
$ck\log k+(-ck+ck)$
$ck\log k$

T(n) = T(n/100) + T(n/49) + T(n/27) + T(n/9) + T(n/3) + T(9n/20) + n
Hypothesis: $T(n) \le cn\log n$
T(n) = $c(\left( n/100*\log\left( \frac{n}{100} \right) \right)+\left( n/49*\log\left( \frac{n}{49} \right) \right)+\left( n/27*\log\left( \frac{n}{27} \right) \right)+\left( n/9*\log\left( \frac{n}{9} \right) \right)+\left( n/3*\log\left( \frac{n}{3} \right) \right)+\left( 9n/20*\log\left( \frac{9n}{20} \right) \right)+n)$
$c\left( \left( \frac{n}{100}\log n-\frac{n}{100}\log{100} \right) \right)$
$2(c*.5k*(\log k-\log{2}))$
$2((.5ck\log k)-(.5ck\log{2}))$
$ck\log k-ck(1)$

T(n) = $5\left( T\left( \frac{n}{2} \right) \right)+n$
