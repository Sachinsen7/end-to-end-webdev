

-- Assume two tables: customers (id, name) and orders (id, customer_id, amount)

-- Sample data setup
CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100)
);
INSERT INTO customers (name) VALUES ('Alice'), ('Bob'), ('Charlie');

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(id),
    amount DECIMAL(10,2)
);
INSERT INTO orders (customer_id, amount) VALUES (1, 100.00), (2, 200.00);

-- Inner Join: Only matching rows
SELECT c.name, o.amount
FROM customers c
INNER JOIN orders o ON c.id = o.customer_id;

-- Left Join: All customers, orders if exist
SELECT c.name, o.amount
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id;

-- Right Join: All orders, customers if exist
SELECT c.name, o.amount
FROM customers c
RIGHT JOIN orders o ON c.id = o.customer_id;

-- Full Outer Join: All from both
SELECT c.name, o.amount
FROM customers c
FULL OUTER JOIN orders o ON c.id = o.customer_id;

-- Cross Join: Every combo (no ON)
SELECT c.name, o.amount
FROM customers c
CROSS JOIN orders o;
