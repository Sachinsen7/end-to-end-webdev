# SQL TCL Theory Notes

These are my notes on SQL TCL (Transaction Control Language) from Hitesh Choudhary's videos. I refined them to sound more natural, like my own jottings after watching. TCL is about managing transactions in the database—basically, grouping operations so they either all succeed or all fail, keeping things consistent. It's super important for data integrity, especially when multiple operations are involved, like transferring money between accounts.

## What is TCL?

TCL stands for Transaction Control Language. It's used to control the execution of transactions in SQL. A transaction is a sequence of SQL statements treated as a single unit. If something goes wrong, you can roll back; if all good, commit. This ensures ACID properties (Atomicity, Consistency, Isolation, Durability).

Key points:

- TCL commands help handle commits, rollbacks, and savepoints.
- They're often used with DML commands (INSERT, UPDATE, DELETE) since those change data.
- In some databases like MySQL, transactions need explicit start with BEGIN or START TRANSACTION.
- Hitesh explains this well in the context of real-world scenarios like banking.

## Main TCL Commands

Here are the key ones with explanations and examples.

### 1. COMMIT

- **Purpose**: Saves all changes made in the current transaction permanently.
- **Example**: After inserting or updating, commit to make it stick.
- Notes: Once committed, you can't rollback.

### 2. ROLLBACK

- **Purpose**: Undoes all changes in the current transaction, restoring to the last commit or start.
- **Example**: If an error occurs during updates, rollback to avoid partial changes.
- Notes: Useful for error handling.

### 3. SAVEPOINT

- **Purpose**: Sets a point within a transaction to which you can rollback partially.
- **Example**: Create a savepoint after some operations, then rollback to it if needed.
- Notes: Allows finer control in complex transactions.
