---
created_at: 2025-02-05T13:44:46-05:00
modified_at: 2025-02-10T18:32:45-05:00
---
#coding/algorithm 
Have n classes of $\ge k$ students alpho sorted. create merged list
since students are pre sorted its just the second half of merge sort

recurrance = 2T(n/2) + 2k
layer work = nk

---
IH: for circle of size n; there is always a section of the circle such that the section starts with an interview and ends once the number of rejections totals the number of interviews

base case n=2
1 rejection
1 interview
start w interview and ih holds

IS:
for F(n+2) (n+2 because number must be even) will add one acceptance and one rejection. 