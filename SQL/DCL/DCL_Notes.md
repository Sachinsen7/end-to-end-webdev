# SQL DCL Theory Notes

These are my notes on SQL DCL (Data Control Language), pulled together from what I remember of Hitesh Choudhary's videos and some quick mental refreshers. I totally get forgetting to note this—DCL often comes after DDL and DML, and it's more about security and access control than building or manipulating data. It's crucial for managing who can do what in a database, especially in team or production environments.

## What is DCL?

DCL stands for Data Control Language. It's the part of SQL that handles permissions and access rights to database objects. While DDL sets up the structure and DML works with the data, DCL is all about controlling who gets to see or change things. This helps with security, like granting read-only access to some users or full control to admins. Changes from DCL are usually auto-committed, similar to DDL.

Key points:

- DCL focuses on user privileges and roles.
- It's essential for multi-user databases to prevent unauthorized access.
- Common in systems like PostgreSQL, MySQL, or Oracle.
- Not as frequently used in beginner tutorials, which is why it might slip by!

## Main DCL Commands

Here are the key commands with explanations and simple examples. I'll use a "products" table and assume users like "user1" or "admin" for demos.

### 1. GRANT

- **Purpose**: Gives specific permissions to a user or role on database objects. Permissions can include SELECT (read), INSERT, UPDATE, DELETE, or even ALL PRIVILEGES.
- **Example**: Granting read and write access to a table.
- Notes: You can grant to PUBLIC (all users) or specific ones. Always specify the object (table, view, etc.).

### 2. REVOKE

- **Purpose**: Takes away previously granted permissions from a user or role.
- **Example**: Removing update rights from a user.
- Notes: Like GRANT, it can be targeted. Use it to tighten security if needed.

## Other Related Concepts

- **Roles**: You can create roles (like groups) and grant permissions to roles instead of individual users for easier management.
- **COMMIT and ROLLBACK**: Sometimes used with DCL in transactions, but not always required.
- Hitesh probably mentioned this in the context of database administration—it's more admin-level stuff.
