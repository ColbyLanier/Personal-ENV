---
Temperature: 5
Workspace: "[[3-Algorithms]]"
Progress: 0
NoteLevel: IMP
Importance: 3
NoteType: NOTE
Abstraction: 25
---

$T(n)=aT\left( \frac{n}{b} \right)+cn^d$
work per subproblem $s=c\left( \frac{n}{b^i}\right)^d; \frac{n}{b^i} \ge 1$
work per layer = $s*a^i$
number of layers = $\log_{b}n$
$\sum^{\log_{b} n}_{i=1}(c\left( \frac{n}{b^i}\right)^d)(a^i)$
$cn^d\sum^{\log_{b} n}_{i=1}a^i/(b^i)^d$
$cn^d\sum^{\log_{b} n}_{i=1}(a/b^d)^i$
$r=\frac{a}{b^d}$
$k=\log n$
$\frac{1-r^{\log_{b}{n}+1}}{1-r}$
$r^x=\left( \frac{a}{b^d} \right)^{\log _{b}{n}}(a/b^d)$
$ab^{-d\log_{b}n}$
$an^{-d}$
$cn^d\left( \frac{1-\left( \frac{a}{n^d} \right)*(a/b^d)}{1-a/b^d} \right)$
$\frac{cn^d}{1-\frac{a}{b^d}}$
if the per layer work is nlogn you cant apply master theorem

### Practice Questions 
