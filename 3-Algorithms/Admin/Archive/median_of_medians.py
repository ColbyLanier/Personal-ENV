import matplotlib.pyplot as plt
import numpy as np

# Function to estimate recursion depth for Median of Medians with group size k
def recursion_depth(n, k, elimination_fraction):
    depth = 0
    while n > 1:
        n = elimination_fraction * n  # Reduce the problem size each step
        depth += 1
    return depth

# Define n values (array sizes)
n_values = np.logspace(1, 12, num=100)  # From 10^1 to 10^12

# Recursion depth for groups of 5 (eliminating ~30% per step)
depth_5 = [recursion_depth(n, 5, 7/10) for n in n_values]

# Recursion depth for groups of 7 (eliminating ~40% per step)
depth_7 = [recursion_depth(n, 7, 5/7) for n in n_values]

# Plot results
plt.figure(figsize=(8,5))
plt.plot(n_values, depth_5, label="Group Size 5", linestyle='-', color='blue')
plt.plot(n_values, depth_7, label="Group Size 7", linestyle='--', color='red')
plt.xscale("log")
plt.xlabel("Array Size (n)")
plt.ylabel("Recursion Depth")
plt.title("Recursion Depth Comparison: Group Size 5 vs 7")
plt.legend()
plt.grid(True, which="both", linestyle="--", linewidth=0.5)

# Show the plot
plt.show()
