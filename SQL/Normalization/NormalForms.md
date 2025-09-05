# Database Normalization Theory Notes

Hey, these are my quick notes on database normalization from Hitesh Choudhary's videos. Normalization is about organizing data in tables to reduce redundancy and improve integrity—like avoiding duplicate data that could lead to errors. It's based on rules called normal forms. I'll explain 1NF, 2NF, and 3NF briefly as requested, each with its own explanation, and just mention the higher ones.

## 1st Normal Form (1NF)

1NF is the basic level: Every table cell should have a single value (no repeating groups or arrays in columns), and all entries in a column must be of the same type. Plus, each row should be unique, often with a primary key.  
Explanation: Imagine a table where a column has multiple phone numbers separated by commas—that violates 1NF. Fix it by making separate rows for each phone or a separate table. This eliminates atomicity issues and makes querying easier.

## 2nd Normal Form (2NF)

2NF builds on 1NF: The table must be in 1NF, and all non-key attributes must depend on the entire primary key (no partial dependencies).  
Explanation: If you have a composite key (like order_id + product_id), non-key columns shouldn't depend on just part of the key. For example, if product_name depends only on product_id, move it to a separate products table. This reduces redundancy, like not repeating product details in every order row.

## 3rd Normal Form (3NF)

3NF goes further: Must be in 2NF, and no transitive dependencies—non-key attributes shouldn't depend on other non-key attributes.  
Explanation: If column A depends on the key, and column B depends on A (not directly on the key), that's transitive. Example: In an employee table, if department_location depends on department_id (which depends on employee_id), split department info into its own table. This avoids update anomalies, like changing a location in multiple places.

## Higher Normal Forms (Just Mentions)

- Boyce-Codd Normal Form (BCNF): Stricter 3NF, every determinant is a candidate key.
- 4th Normal Form (4NF): Deals with multi-valued dependencies, no independent multi-valued facts in one table.
- 5th Normal Form (5NF): Handles join dependencies, ensures no lossless decomposition issues.
- 6th Normal Form (6NF): For temporal data, but rare.

No real SQL file for this since normalization is design-level, but I'll include a dummy one with table creation examples showing before/after.
