CREATE TABLE chai_store(
    id          SERIAL PRIMARY KEY,
    chai_name   VARCHAR(50),
    price       DECIMAL(5,2),
    chai_type   VARCHAR(50),
    available   BOOLEAN
);




INSERT INTO chai_store(
    chai_name, price, chai_type, available
) VALUES (
("Masala Chai", 30.00, 'Spiced', TRUE),
("Green Tea", 10.00, 'Green', TRUE),
('Black Tea', 10.00, 'Black', TRUE),
('Oolong Tea', 10.00, 'Oolong', TRUE),
('Ice Tea', 10.00, 'Ice', TRUE)    
);
