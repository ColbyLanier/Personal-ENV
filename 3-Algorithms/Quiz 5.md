---
Workspace: 3-Algorithms
---
<%* 
const wksp = await tp.user.wsl()
const block = `[[${wksp}-Block]]`
const path = `/${wksp}/${tp.file.title}`
-%>
<% "---" %>
created_at: <% tp.file.creation_date('YYYY-MM-DD[T]HH:mm:ssZ') %>
modified_at: <% tp.file.last_modified_date('YYYY-MM-DD[T]HH:mm:ssZ') %>
workspace: <% wksp %>
<% tp.file.include(block) %>
<% "---" %>
<% await tp.file.move(path) %>

FCBarcelona will play n matches in a season. Let A and B be two arrays containing positive integers including zero. In match i, they can choose between two tactics:  
  
Tactic 0: If Barcelona uses this approach in match i, they score A[i] goals  
Tactic 1: If Barcelona uses this approach in match i, they score B[i] goals

They start with using Tactic 0  
Switching tactics between matches causes confusion between the players and as a result, the opposition scores L goals in the following match, otherwise the teamplay is perfect and the opposition scores zero goals.   
How can they end the season with the maximum possible goal difference? The goal difference is defined as goals scored minus goals conceded.

The coach decides to use dynamic programming to solve this. He suggests using a 2D dp table (0-indexed) of size (n + 1, 2) where the meaning is   
**dp[i][j]**: Maximum goal difference after using optimal tactics for the first i matches and if in the i-th match FCBarcelona uses Tactic j

## **Question 1** (2 points)

 

 Saved

What should the values in the dp table be after the first match (i = 1)?

Question 1 options:

|     |                                           |
| --- | ----------------------------------------- |
|     | dp[1][0] = 0  <br>dp[1][1] = 0            |
|     | dp[1][0] = A[1]  <br>dp[1][1] = B[1]      |
| x   | dp[1][0] = A[1]   <br>dp[1][1] = B[1] - L |
| xx  | dp[1][0] = A[1]  <br>dp[1][1] = -inf      |

## **Question 2** (4 points)

 

 Saved

Which of the following is a correct recurrence for the problem?

Question 2 options:

|     |                                                                                                                                |
| --- | ------------------------------------------------------------------------------------------------------------------------------ |
|     | dp[i][0] = max(dp[i-1][0] + A[i], dp[i-1][1] + A[i])  <br>dp[i][1] = max(dp[i-1][1] + B[i], dp[i-1][0] + B[i])                 |
|     | dp[i][0] = max(dp[i-1][0] + A[i] - L, dp[i-1][1] + A[i])  <br>dp[i][1] = max(dp[i-1][1] + B[i] - L, dp[i-1][0] + B[i])         |
| x   | dp[i][0] = max(dp[i-1][0] + A[i], dp[i-1][1] + A[i] - L)  <br>dp[i][1] = max(dp[i-1][1] + B[i], dp[i-1][0] + B[i] - L)         |
|     | dp[i][0] = max(dp[i-1][0] + A[i] - L, dp[i-1][1] + A[i] - L)  <br>dp[i][1] = max(dp[i-1][1] + B[i] - L, dp[i-1][0] + B[i] - L) |

## **Question 3** (2 points)

 

 Saved

Where is the answer in the dp table?

Question 3 options:

|     |                                      |
| --- | ------------------------------------ |
|     | answer = dp[n][0]                    |
|     | answer = dp[n][1]                    |
|     | answer = max(dp[n-1][0], dp[n-1][1]) |
| x   | answer = max(dp[n][0], dp[n][1])     |

## Problem

Recall the knapsack problem discussed in class, if we solve it using the standard algorithm discussed in class for n items and W being the weight of the knapsack.

## **Question 4** (2 points)

 

 Saved

Which of the following is true about the time complexity of the problem?  
Time complexity measures the time that an algorithm takes as a function of the length in bits of its input.

Question 4 options:

|     |                                                              |
| --- | ------------------------------------------------------------ |
|     | Exponential in the size of n and polynomial in the size of W |
| x   | Exponential in the size of W and polynomial in the size of n |
|     | Logarithmic in the size of W and polynomial in the size of n |
|     | Polynomial in the size of W and polynomial in the size of n  |