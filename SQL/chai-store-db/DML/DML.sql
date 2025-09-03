
-- These are examples using a sample 'products' table
-- Assume the table exists with columns: id (SERIAL PK), name (VARCHAR), price (DECIMAL), stock (INT)

-- INSERT: Adding a new row to the table
-- Here, we're inserting a T-shirt with price and stock
INSERT INTO products (name, price, stock)
VALUES ('T-shirt', 500.00, 10);

-- You can insert multiple rows like this:
-- INSERT INTO products (name, price, stock)
-- VALUES ('Jeans', 1200.00, 5), ('Hat', 300.00, 20);

-- UPDATE: Modifying existing data
-- This updates the price of a specific product
UPDATE products 
SET price = 800.00
WHERE name = 'T-shirt';

-- Without WHERE, it'd change all rows—be careful!

-- DELETE: Removing rows
-- Deletes a specific product by name
DELETE FROM products 
WHERE name = 'T-shirt';

-- Again, WHERE is crucial to avoid deleting everything

-- SELECT: Querying data
-- Fetches names and prices where price is over 200
SELECT name, price
FROM products
WHERE price > 200;

