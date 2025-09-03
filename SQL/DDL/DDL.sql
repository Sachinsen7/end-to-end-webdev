

-- CREATE: Creating a new table
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2),
    category VARCHAR(50)
);

-- ALTER: Adding a new column with default value
ALTER TABLE products
ADD COLUMN stock INT DEFAULT 0;

-- ALTER: Changing a column's data type
ALTER TABLE products
ALTER COLUMN price TYPE DECIMAL(12, 2);

-- ALTER: Dropping a column
ALTER TABLE products
DROP COLUMN category;

-- ALTER: Renaming the table
ALTER TABLE products
RENAME TO inventory;

-- ALTER: Renaming a column 
ALTER TABLE products
RENAME COLUMN name TO product_name;

-- DROP: Deleting a table
DROP TABLE products;

-- DROP: Deleting an index (assuming one exists)
DROP INDEX idx_name;  

-- TRUNCATE: Removing all rows from a table
TRUNCATE TABLE products;

