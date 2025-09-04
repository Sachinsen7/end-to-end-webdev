
-- GRANT: Giving permissions to a user
-- This grants SELECT (read) and INSERT on the products table to user1
GRANT SELECT, INSERT ON products TO user1;

-- Another GRANT example: Full privileges on the table
GRANT ALL PRIVILEGES ON products TO admin;

-- GRANT on a database level
GRANT CONNECT ON DATABASE mydatabase TO user1;

-- REVOKE: Removing permissions
-- This revokes UPDATE from user1 on products
REVOKE UPDATE ON products FROM user1;

-- REVOKE all privileges
REVOKE ALL PRIVILEGES ON products FROM user1;

-- Bonus: Granting to a role (first create the role if needed)
CREATE ROLE readonly;
GRANT SELECT ON products TO readonly;
GRANT readonly TO user1;  -- Assigns the role to the user

