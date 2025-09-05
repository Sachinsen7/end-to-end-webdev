-- These are table creations showing violations and fixes

-- Violating 1NF: Multi-values in a column
CREATE TABLE bad_contacts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    phones TEXT  -- e.g., '123-456, 789-012' – bad!
);

-- Fixed to 1NF: Separate rows or table
CREATE TABLE contacts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100)
);
CREATE TABLE phones (
    contact_id INT REFERENCES contacts(id),
    phone VARCHAR(20)
);

-- Violating 2NF: Partial dependency (assume composite key order_id + product_id)
CREATE TABLE bad_orders (
    order_id INT,
    product_id INT,
    quantity INT,
    product_name VARCHAR(100),  -- Depends only on product_id, not full key
    PRIMARY KEY (order_id, product_id)
);

-- Fixed to 2NF: Split out products
CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(100)
);
CREATE TABLE orders (
    order_id INT,
    product_id INT REFERENCES products(product_id),
    quantity INT,
    PRIMARY KEY (order_id, product_id)
);

-- Violating 3NF: Transitive dependency
CREATE TABLE bad_employees (
    emp_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    dept_id INT,
    dept_location VARCHAR(100)  -- Depends on dept_id, not emp_id directly
);

-- Fixed to 3NF: Separate departments
CREATE TABLE departments (
    dept_id SERIAL PRIMARY KEY,
    dept_location VARCHAR(100)
);
CREATE TABLE employees (
    emp_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    dept_id INT REFERENCES departments(dept_id)
);
