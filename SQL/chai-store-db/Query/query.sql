SELECT * FROM chai_storee

SELECT chai_name AS "Chai Name", price AS "Cost in INR" FROM chai_storee

-- find 
SELECT * 
FROM chai_storee
WHERE chai_name = 'Black Tea'


SELECT * 
FROM chai_storee
WHERE chai_name LIKE '%Tea%'

-- list all that is less than 30 

SELECT * 
FROM chai_storee
WHERE price < 30


SELECT * 
FROM chai_storee
ORDER BY price DESC -- dont provide it will run default 


-- updates 


UPDATE chai_storee
SET price = 38.00, available = TRUE
WHERE chai_name = 'Iced Tea'


SELECT * from chai_storee

--  delete 

DELETE FROM chai_storee
WHERE chai_name = 'Black Tea'

