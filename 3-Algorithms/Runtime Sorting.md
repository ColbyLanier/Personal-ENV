---
Temperature: 5
Workspace: "[[3-Algorithms]]"
Progress: 0
NoteLevel: IMP
Importance: 3
NoteType: NOTE
Abstraction: 25
---
Previous Midterm: $\frac{n}{\log n}, 2^{2n},n^{2n},n!,\log(4n^{4n})$

Homework (completed but i dont remember these it was a while ago)
j: $\frac{\log(n)}{n}$
b: $2^{\sqrt{ n }}$ # this was a mistake as I thought $\sqrt{ 2 }^n$ would be a decreasing function

h: $\sqrt{ n }(\log(n))^2$
e: $n*3^{\log(n)}$
c: $(\log(n))^{3}n$
a: $n^{2}\log (n)$
d: $\frac{n^{3}}{\log(n)}$

g: $n^{\log(n)}$
f: $e^n$
i: $\frac{n!}{2^n}$

compare adjacent indices. if $\lim_{ n \to \infty } \frac{f(x)}{g(x)} =\infty$ then f(x) > g(x)
j: $\frac{\log(n)}{n}$ # this is pretty clear as it is the only function to grow slower than log(n)
h: $\sqrt{ n }(\log(n))^2$ # $\sqrt{ n }$ dominates, only function to grow slower than linear time
c: $(\log(n))^{3}n$ # n dominates, grows in approximately linear time
e: $n*3^{\log(n)}$ # $3^{\log n}$ reduces to $\log_{3}\log n$ in comparisons. this was my favorite runtime to compare; very thought provoking.
a: $n^{2}\log (n)$ # $n^2$ dominates, grows polynomially
d: $\frac{n^{3}}{\log(n)}$ # $n^3$ dominates, grows cubically

+
g: $n^{\log(n)}$ # reduces to $(\log n)^2$ in comparisons, grows exponentially
f: $e^n$ 
i: $\frac{n!}{2^n}$

