## Aggregate Functions

These operate on sets of values to return a single value. Common ones:

- SUM: Adds up numbers, e.g., total sales.
- AVG: Average value, ignores NULLs.
- COUNT: Counts rows or non-NULL values.
- MIN/MAX: Smallest/largest value.
- Others like STDDEV for standard deviation.  
  Explanation: Use them to analyze data, like "What's the average price?" Group by categories for breakdowns.

## Subqueries (Inner Queries)

A query nested inside another, in WHERE, FROM, or SELECT.  
Explanation: Like asking "Select products more expensive than the average price." The inner query calculates average, outer uses it. Can be correlated (refers to outer) or non-correlated. Great for comparisons without temp tables.
