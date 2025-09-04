
-- Start a transaction (some DBs use BEGIN TRANSACTION)
START TRANSACTION;

-- Some DML operations
INSERT INTO products (name, price, stock)
VALUES ('Laptop', 50000.00, 5);

UPDATE products
SET stock = stock - 1
WHERE name = 'Laptop';

-- Set a savepoint
SAVEPOINT after_update;

-- More operations
DELETE FROM products WHERE name = 'Old Item';

-- If something's wrong, rollback to savepoint
ROLLBACK TO SAVEPOINT after_update;

-- Or full rollback
ROLLBACK;

-- If all good, commit
COMMIT;