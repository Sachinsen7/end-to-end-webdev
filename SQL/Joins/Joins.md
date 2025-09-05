# SQL Joins Theory Notes

These are my notes on SQL joins from watching Hitesh Choudhary. Joins combine rows from two or more tables based on related columns, like linking products to orders. They're key for relational databases to pull data from multiple places without redundancy.

## Inner Join

Returns only rows where there's a match in both tables.  
Explanation: Like finding common friends between two lists. If no match, those rows are excluded. Use for exact intersections, e.g., customers who have orders.

## Left Join (or Left Outer Join)

Returns all rows from the left table, and matched rows from the right. Unmatched right rows get NULLs.  
Explanation: Keeps everything from the left table, adds right where possible. Great for seeing all customers, including those without orders.

## Right Join (or Right Outer Join)

Opposite of left: All rows from the right table, matched from left, with NULLs for unmatched left.  
Explanation: Similar to left but prioritizes the right table. Useful if the right table is your main focus, like all orders, even without customer details.

## Outer Join (or Full Outer Join)

Returns all rows from both tables, with NULLs where no match.  
Explanation: Combines left and right joins—shows everything, matched or not. Ideal for comparing datasets or finding mismatches.

## Cross Join

Produces a Cartesian product: Every row from left combined with every row from right, no conditions.  
Explanation: No keys needed; if left has M rows and right N, you get M\*N rows. Use sparingly—good for combinations like all products with all colors, but can be huge.
