---
created_at: 2025-01-16T08:15:01-05:00
modified_at: 2025-02-10T18:33:15-05:00
---
#coding/algorithm 
The 'search space' of a problem typically scales exponentially with input size

A good algorithm should slow down by a constant factor when the input size increases by a constant factor (rather than the expected exponential increase)

>[!info]
>if there are constants c and d in an algorithm cN^d
>increasing the size of N (input) to 2n => c2^dN^d
>2^d is a constant and can be absorbed => c'N^d
>note that even though its multiplicative it scales the c factor not the N factor so it is constant

10^50 is technically still polynomial but is not helpful, however this is not common among optimized algorithms