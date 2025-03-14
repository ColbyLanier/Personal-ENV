---
Temperature: 5
Workspace: 3-Algorithms
Progress: 0
NoteLevel: IMP
Importance: 3
NoteType: NOTE
Abstraction: 25
Parent: "[[Proof by contradiction]]"
---
When creating the inductive step of a recursive program there are a few steps to take

begin with k+1 of some form. Locate substitution opportunities from the inductive hypothesis.

In a recursive program we can use these substitutions to prove that the children are processed correctly

- This must be paired with a proof by contradiction or other proof of the parent layer work
	- example in merge sort, we can assume that the child arrays will be sorted correctly, but we still need to prove the correctness of the parent merge step
### past error
I was so focused on proving the parent layer only in the context of the ie that it didnt stand as a strong generalizable lemma
- prefer to create a generic proof of parent correctness and attach is to that

## Reframing opp
when talking about [[Counting Inversions]] the prof said that he would want to do a proof on step t of the algorithm as the ih with the is that it will run correctly on step t+1. How would this work? Ive only ever inducted across a new iteration with a larger input size, this might prove the correctness of the alg in the immediate sense but i dont think it proves scalabiliity. perhaps this could be an alternative to the past error contradiction proof.

- make a micro-induction on step t > t+1 within the program to guaruntee parent level correctness and use that as a lemma for full induction

