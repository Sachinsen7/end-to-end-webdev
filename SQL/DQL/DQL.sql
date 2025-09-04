
-- Basic SELECT: All columns
SELECT * FROM products;

-- Specific columns
SELECT name, price
FROM products;

-- With filter
SELECT name, price
FROM products
WHERE price > 200.00;

-- Sorting
SELECT name, price
FROM products
ORDER BY price DESC;

-- Aggregate
SELECT COUNT(*) AS total_products
FROM products;

-- Grouping
SELECT category, AVG(price) AS avg_price
FROM products
GROUP BY category;

-- Join example (assume another 'orders' table)
SELECT p.name, o.quantity
FROM products p
JOIN orders o ON p.id = o.product_id;