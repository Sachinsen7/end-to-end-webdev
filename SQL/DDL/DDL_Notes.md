# SQL DDL Theory Notes

These notes are based on SQL DDL (Data Definition Language) concepts from Hitesh Choudhary's videos. I've refined them to make them clearer, more organized, and easier to read. DDL is all about defining and managing the structure of your database—think of it as the blueprint for how your data is organized.

## What is DDL?

DDL stands for Data Definition Language. It's a subset of SQL used to define, modify, and manage database objects like tables, indexes, views, and more. Unlike DML (Data Manipulation Language), which deals with inserting, updating, or deleting data, DDL focuses on the schema and structure of the database itself. Once you execute DDL commands, they often auto-commit, meaning changes are permanent and can't be rolled back easily in some databases.

Key points:

- DDL helps create the foundation of your database.
- It's used for tasks like creating tables, altering their structure, or dropping them entirely.
- Common database objects managed: tables, views, indexes, schemas, etc.

## Main DDL Commands

Here are the primary DDL commands with explanations and examples. I'll keep the examples simple and based on a hypothetical "products" table.

### 1. CREATE

- **Purpose**: Used to create new database objects, such as databases, tables, views, or indexes.
- **Example**: Creating a new table.
  ```sql
  CREATE TABLE products (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100),
      price DECIMAL(10, 2)
  );
  ```
- Notes: You can create a whole database with `CREATE DATABASE mydb;`, or an index like `CREATE INDEX idx_name ON products(name);`.

### 2. ALTER

- **Purpose**: Modifies existing database objects. This includes adding, dropping, or renaming columns, changing data types, and more.
- **Examples**:
  - Adding a column: Add a "stock" column with a default value.
  - Altering a column's data type: Change "price" to a more precise decimal.
  - Dropping a column: Remove the "category" column.
  - Renaming a table: Change "products" to "inventory".
  - Renaming a column: Change "name" to "product_name".
- Notes: ALTER is versatile but be careful—it can affect data integrity if not handled properly.

### 3. DROP

- **Purpose**: Deletes existing database objects like tables or indexes. This is permanent, so use with caution!
- **Example**: Dropping a table or index.
  ```sql
  DROP TABLE products;
  DROP INDEX idx_name;
  ```
- Notes: If the object has dependencies (e.g., foreign keys), you might need to use CASCADE to drop them too, like `DROP TABLE products CASCADE;`.

### 4. TRUNCATE

- **Purpose**: Removes all rows from a table without deleting the table itself. It's faster than DELETE because it doesn't log individual row deletions.
- **Example**:
  ```sql
  TRUNCATE TABLE products;
  ```
- Notes: This resets any auto-increment counters and is often used to clear data for testing. Unlike DROP, the table structure remains intact.

## Tips from the Videos

- Always back up your database before running DDL commands, especially ALTER or DROP.
- DDL commands are case-insensitive in most SQL dialects (e.g., PostgreSQL, MySQL), but object names might be case-sensitive depending on the DB.
- Practice in a test environment to avoid messing up production data.
- Hitesh emphasizes understanding schema design early on—good DDL leads to efficient queries later.
