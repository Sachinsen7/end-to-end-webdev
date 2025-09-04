## What is DQL?

DQL stands for Data Query Language. It's focused on retrieving data from the database. The star command is SELECT, which lets you fetch, filter, sort, and aggregate data. It's read-only, so no risk of altering stuff.

Key points:

- DQL is for querying schema relations based on conditions.
- Essential for reports, analysis, and displaying data in apps.
- Can involve joins, subqueries, functions, etc., for complex retrieval.
- In strict terms, DQL is just SELECT; the rest is syntax around it.

## Main DQL Command

Really, it's just one main one, but with tons of variations.

### 1. SELECT

- **Purpose**: Retrieves data from tables, with options for filtering (WHERE), grouping (GROUP BY), sorting (ORDER BY), etc.
- **Example**: Get products over a price threshold.
- Notes: Can select specific columns, all (\*), or calculated values. Joins multiple tables too.
