-- CREATE DATABASE IF NOT EXISTS cc11;
-- DROP DATABASE cc11;

-- CREATE DATABASE todo_list;
-- USE todo_list;

-- CREATE TABLE users(
--   id INT AUTO_INCREMENT,
--   name VARCHAR(40) NOT NULL,
--   national_id VARCHAR(13),
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE todos(
-- 	id INT AUTO_INCREMENT,
--     title VARCHAR(255) NOT NULL,
--     status BOOLEAN NOT NULL DEFAULT 0,
--     user_id INT NOT NULL,
--     PRIMARY KEY (id),
--     FOREIGN KEY (user_id) REFERENCES users (id)
-- );

-- ALTER TABLE todos RENAME COLUMN status TO completed; 

-- USE todo_list; 
-- INSERT INTO users (name, national_id) VALUE ("John", "1234567890123");
-- INSERT INTO users (name, national_id) VALUE ("Jack", "0987654321012"), ("Joey", "1285347985875");

-- INSERT INTO todos (title, completed, user_id) VALUE ("Meeting", false, 1);
-- INSERT INTO todos (title, completed, user_id) VALUE ("Meeting", false, 4);
-- INSERT INTO todos (title,  user_id) VALUE ("Dining", 1);

-- UPDATE todos SET completed = true, user_id = 3 WHERE id = 1;

-- DELETE FROM todos WHERE id = 3;

-- CREATE DATABASE `cc10_banking`;
-- USE `cc10_banking`;

-- SELECT * FROM `individual`;
-- SELECT `CUST_ID`, `BIRTH_DATE` FROM `individual`;
-- SELECT * FROM `individual` WHERE `CUST_ID` > 5;
-- SELECT `FIRST_NAME` FROM `individual` WHERE `CUST_ID` > 5;
-- SELECT `FIRST_NAME`, `CUST_ID` FROM `individual` WHERE `CUST_ID` > 5 OR `CUST_ID` < 2;
-- SELECT * FROM `employee` WHERE `TITLE` = "Teller"; 
-- SELECT * FROM `employee` WHERE `TITLE` = "Teller" AND `SUPERIOR_EMP_ID` = 6;
-- SELECT * FROM `employee` ORDER BY `FIRST_NAME`;
-- SELECT * FROM `employee` ORDER BY `FIRST_NAME` DESC;
-- SELECT * FROM `employee` ORDER BY `FIRST_NAME` DESC, `LAST_NAME`;
-- SELECT * FROM `EMPLOYEE` WHERE `TITLE` = "Teller" ORDER BY `FIRST_NAME`;
-- SELECT DISTINCT `FIRST_NAME` FROM `employee`;
-- SELECT DISTINCT `TITLE` FROM `employee`;
-- SELECT DISTINCT `TITLE` FROM `employee` ORDER BY `TITLE`;
-- SELECT DISTINCT `TITLE` FROM `employee` WHERE `ASSIGNED_BRANCH_ID` = 3 ORDER BY `TITLE`;
-- SELECT * FROM `employee` LIMIT 5 OFFSET 10;
-- SELECT * FROM `employee` LIMIT 10, 5;
-- SELECT * FROM `employee` WHERE `TITLE` = "Teller" ORDER BY `FIRST_NAME` LIMIT 5, 5;

-- SELECT * FROM `employee` WHERE `FIRST_NAME` LIKE "%a%";
-- SELECT * FROM `employee` WHERE `FIRST_NAME` LIKE "%a%n";
-- SELECT * FROM `employee` WHERE `FIRST_NAME` LIKE "%a%n%";
-- SELECT * FROM `employee` WHERE `FIRST_NAME` LIKE "%ra%";
-- SELECT * FROM `employee` WHERE `FIRST_NAME` LIKE "__a%";
-- SELECT * FROM `employee` WHERE `FIRST_NAME` LIKE "____n";

-- *********advance command
-- alias
USE `cc10_banking`;

SELECT `ASSIGNED_BRANCH_ID` AS `branch_id` FROM `employee`;
SELECT `ASSIGNED_BRANCH_ID` `branch_id` FROM `employee`;
SELECT `ASSIGNED_BRANCH_ID` branch_id FROM `employee`;
SELECT `ASSIGNED_BRANCH_ID` branch_id, `SUPERIOR_EMP_ID` sup_id FROM `employee`;
SELECT `employee`.`ASSIGNED_BRANCH_ID` branch_id, `employee`.`SUPERIOR_EMP_ID` sup_id FROM `employee`;
SELECT e.`ASSIGNED_BRANCH_ID` branch_id, e.`SUPERIOR_EMP_ID` sup_id FROM `employee` e;

-- string function
SELECT CONCAT(`FIRST_NAME`, ' ', `LAST_NAME`) AS fullname FROM `employee`;
SELECT CONCAT_WS(' ', `FIRST_NAME`, `LAST_NAME`) AS fullname FROM `employee`;

-- aggregate function
SELECT COUNT(*) AS total_emp FROM `employee`;
SELECT COUNT(*) AS total_emp FROM `employee` WHERE `FIRST_NAME = 'John`;
SELECT COUNT(DISTINCT `FIRST_NAME`) AS total_emp FROM `employee`;

SELECT SUM(`AVAIL_BALANCE`) AS total FROM `account`;
SELECT SUM(`AVAIL_BALANCE` * 2) AS total FROM `account`;
SELECT SUM(`AVAIL_BALANCE`)*2 AS total FROM `account`;
SELECT `AVAIL_BALANCE`- `PENDING_BALANCE` AS diff FROM `account`;
SELECT SUM(`AVAIL_BALANCE`- `PENDING_BALANCE`) AS total_diff FROM `account`;
SELECT `AVAIL_BALANCE`- `PENDING_BALANCE` AS diff FROM `account` ORDER BY diff;

SELECT AVG(`AVAIL_BALANCE`) AS avg FROM `account`;

SELECT MAX(`AVAIL_BALANCE`) AS max_balance FROM `account`;
SELECT MAX(`AVAIL_BALANCE`) AS max_balance FROM `account` WHERE `CUST_ID` = 4;
SELECT MIN(`AVAIL_BALANCE`) AS min_balance FROM `account` WHERE `OPEN_BRANCH_ID` = 2;

SELECT `CUST_ID` FROM `account` GROUP BY `CUST_ID`;
-- SELECT DISTINCT `CUST_ID` FROM `account`;
SELECT `CUST_ID`, SUM(`AVAIL_BALANCE`) FROM `account` GROUP BY `CUST_ID`;
SELECT `CUST_ID`, `OPEN_BRANCH_ID`, SUM(`AVAIL_BALANCE`) FROM `account` GROUP BY `CUST_ID`, `OPEN_BRANCH_ID`;
SELECT `CUST_ID`, `OPEN_BRANCH_ID`, SUM(`AVAIL_BALANCE`) FROM `account` WHERE `STATUS` = 'ACTIVE' GROUP BY `CUST_ID`, `OPEN_BRANCH_ID`;
SELECT `CUST_ID`, SUM(`AVAIL_BALANCE`)AS total FROM `account` GROUP BY `CUST_ID` ORDER BY total DESC LIMIT 5;

SELECT `CUST_ID`, SUM(`AVAIL_BALANCE`)AS total FROM `account` GROUP BY `CUST_ID` HAVING total < 10000 ORDER BY total DESC LIMIT 5;

-- *********Join Clause
USE `cc10_banking`;

-- inner join
SELECT * FROM employee INNER JOIN department ON employee.DEPT_ID = department.DEPT_ID;
SELECT FIRST_NAME, LAST_NAME, TITLE, NAME FROM employee INNER JOIN department ON employee.DEPT_ID = department.DEPT_ID;
SELECT employee.FIRST_NAME, employee.LAST_NAME, employee.TITLE, department.NAME FROM employee INNER JOIN department ON employee.DEPT_ID = department.DEPT_ID;
SELECT e.FIRST_NAME, e.LAST_NAME, e.TITLE, d.NAME FROM employee e INNER JOIN department d ON e.DEPT_ID = d.DEPT_ID;
SELECT e.FIRST_NAME, e.LAST_NAME, e.TITLE, d.NAME FROM employee e INNER JOIN department d ON e.DEPT_ID = d.DEPT_ID WHERE e.FIRST_NAME LIKE "S%" ORDER BY e.FIRST_NAME, d.NAME;

-- left join
SELECT * FROM department d JOIN employee e ON d.DEPT_ID = e.DEPT_ID;
SELECT * FROM department d LEFT JOIN employee e ON d.DEPT_ID = e.DEPT_ID;

-- right join
SELECT * FROM department d RIGHT JOIN employee e ON d.DEPT_ID = e.DEPT_ID;
SELECT * FROM employee e RIGHT JOIN department d ON d.DEPT_ID = e.DEPT_ID;

-- full join not support

-- cross join

-- example
SELECT * FROM individual i JOIN customer c ON i.CUST_ID = c.CUST_ID;
SELECT * FROM individual i JOIN customer c ON i.CUST_ID = c.CUST_ID JOIN account a ON a.CUST_ID = c.CUST_ID;
SELECT * FROM individual i JOIN customer c ON i.CUST_ID = c.CUST_ID JOIN account a ON a.CUST_ID = c.CUST_ID GROUP BY a.CUST_ID;

SELECT i.FIRST_NAME, i.LAST_NAME, SUM(AVAIL_BALANCE) AS total FROM individual i JOIN customer c ON i.CUST_ID = c.CUST_ID JOIN account a ON a.CUST_ID = c.CUST_ID 
GROUP BY a.CUST_ID ORDER BY total DESC; -- same same***

SELECT * FROM individual, customer; -- same as cross join
SELECT * FROM individual i, customer c WHERE i.CUST_ID = c.CUST_ID; -- same as inner join
SELECT * FROM individual i, customer c, account a WHERE i.CUST_ID = c.CUST_ID AND c.CUST_ID = a.CUST_ID;

SELECT * FROM individual i, customer c, account a WHERE i.CUST_ID = c.CUST_ID AND c.CUST_ID = a.CUST_ID GROUP BY a.CUST_ID ORDER BY total DESC; -- same same***
