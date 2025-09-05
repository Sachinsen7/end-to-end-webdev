
-- Using 'products' table with name, price, stock, category

-- Sample setup
INSERT INTO products (name, price, stock, category)
VALUES ('T-shirt', 500.00, 10, 'Clothing'), ('Jeans', 1200.00, 5, 'Clothing'), ('Laptop', 50000.00, 3, 'Electronics');

-- Aggregate: SUM - Total price of all products
SELECT SUM(price) AS total_value FROM products;

-- AVG - Average price
SELECT AVG(price) AS avg_price FROM products;

-- COUNT - Number of products
SELECT COUNT(*) AS total_products FROM products;

-- MIN/MAX - Cheapest and most expensive
SELECT MIN(price) AS min_price, MAX(price) AS max_price FROM products;

-- With GROUP BY - Avg price per category
SELECT category, AVG(price) AS avg_price
FROM products
GROUP BY category
HAVING AVG(price) > 1000;  -- Filter groups

-- Subquery: Products above average price
SELECT name, price
FROM products
WHERE price > (SELECT AVG(price) FROM products);

-- Correlated subquery: Products with stock > avg stock in their category
SELECT name, stock, category
FROM products p1
WHERE stock > (SELECT AVG(stock) FROM products p2 WHERE p1.category = p2.category);

-- Subquery in FROM: Treat as temp table
SELECT category, max_price
FROM (SELECT category, MAX(price) AS max_price FROM products GROUP BY category) AS sub;