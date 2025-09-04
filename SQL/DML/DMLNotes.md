# SQL DML Theory Notes

Hey, these are my refined notes on SQL DML (Data Manipulation Language) based on what I picked up from Hitesh Choudhary's videos. I've cleaned them up to make them more readable and natural-sounding, like something I'd jot down myself after watching. DML is basically the part of SQL that lets you mess with the actual data inside your tables—adding, changing, deleting, or pulling it out. It's different from DDL, which is more about setting up the structure.

## What is DML?

DML stands for Data Manipulation Language. It's used to handle the data within the database objects (like tables) that you've already created with DDL. Think of it as the tools for inserting new records, updating existing ones, deleting stuff you don't need, and querying to see what's there. These operations are what make your database dynamic and useful day-to-day.

Key points I noted:

- DML commands don't change the database structure; they just work with the data inside.
- They're often used in transactions, so you can commit or rollback changes if something goes wrong.
- In most databases, SELECT is considered part of DML, but sometimes it's grouped under DQL (Data Query Language). Hitesh treats it as DML, so I'll follow that.
- Always be careful with UPDATE and DELETE—use WHERE clauses to avoid affecting the whole table!

## Main DML Commands

Here's a breakdown of the core commands with simple explanations and quick examples. I'm using a "products" table as an example, assuming it has columns like id, name, price, and stock.

### 1. INSERT

- **Purpose**: Adds new rows (records) to a table. You specify the columns and the values to insert.
- **Example**: Adding a new product like a T-shirt.
- Notes: Make sure values match the column data types. You can insert multiple rows at once by adding more VALUES lines.

### 2. UPDATE

- **Purpose**: Changes existing data in one or more rows. You set new values for columns and use WHERE to target specific rows.
- **Example**: Raising the price of a T-shirt.
- Notes: Without a WHERE clause, it'll update every row—big mistake potential!

### 3. DELETE

- **Purpose**: Removes one or more rows from a table. Again, WHERE is key to specify what to delete.
- **Example**: Getting rid of a product by name.
- Notes: This is permanent unless you're in a transaction you can rollback. For clearing all data without dropping the table, use TRUNCATE (but that's DDL).

### 4. SELECT

- **Purpose**: Retrieves data from one or more tables. It's the query command for fetching what you need.
- **Example**: Pulling names and prices of products over a certain price.
