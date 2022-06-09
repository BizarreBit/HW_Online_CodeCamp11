CREATE DATABASE e_commerce;
USE e_commerce;

SELECT e.name, e.address, e.salary, d.name AS department FROM employees e JOIN departments d ON e.department_id = d.id;
SELECT e.name, e.address, e.salary, d.name AS department FROM employees e, departments d WHERE e.department_id = d.id;

SELECT p.name AS product, p.price, s.name AS supplier, s.phone_number FROM products p JOIN suppliers s ON p.supplier_id = s.id;
SELECT p.name AS product, p.price, s.name AS supplier, s.phone_number FROM products p, suppliers s WHERE p.supplier_id = s.id;

SELECT o.id AS order_id, c.name AS customer, e.name AS salesman FROM orders o JOIN customers c ON o.customer_id = c.id LEFT JOIN employees e ON o.employee_id = e.id;

SELECT c.id, c.name, count(o.id) AS order_count FROM customers c LEFT JOIN orders o ON c.id = o.customer_id GROUP BY o.customer_id;
SELECT * FROM orders o RIGHT JOIN customers c ON o.customer_id = c.id;
SELECT c.id, c.name, COUNT(o.id) AS order_count FROM orders o RIGHT JOIN customer c ON o.customer_id = c.id GROUP BY c.id;

SELECT e.id, e.name, COUNT(o.id) AS order_count FROM employees e RIGHT JOIN orders o ON e.id = o.employee_id GROUP BY o.employee_id;

SELECT s.name, COUNT(DISTINCT p.id) AS product_count FROM suppliers s JOIN products p ON s.id = p.supplier_id GROUP BY s.id;

SELECT s.name, p.name AS product_count FROM suppliers s JOIN products p ON s.id = p.supplier_id GROUP BY p.name;

SELECT DISTINCT s.name FROM suppliers s JOIN products p ON s.id = p.supplier_id WHERE p.price > 800;

SELECT e.name AS employee, d.name AS department FROM employees e JOIN departments d ON e.department_id = d.id WHERE d.name = "ฝ่ายขาย";

SELECT d.name, AVG(e.salary) AS avg_salary FROM departments d JOIN employees e ON d.id = e.department_id GROUP BY e.department_id;

SELECT SUM(price * amount) AS total_sales FROM order_items;

SELECT o.date, SUM(oi.price * oi.amount * (1 - oi.discount)) AS total_sales FROM order_items oi JOIN orders o ON oi.order_id = o.id GROUP BY o.date;
SELECT o.date, SUM(oi.price * oi.amount * (1 - oi.discount)) AS total_sales FROM orders o JOIN order_items oi ON o.id = oi.order_id GROUP BY o.date;

SELECT c.id, c.name, IFNULL(SUM(oi.price * oi.amount * (1 - oi.discount)), 0) AS total_sale FROM customers c 
LEFT JOIN orders o ON c.id = o.customer_id LEFT JOIN order_items oi ON o.id = oi.order_id GROUP BY c.id;

SELECT e.name, count(DISTINCT o.id) AS order_count, SUM(oi.price * oi.amount * (1 - oi.discount)) AS total_value FROM employees e JOIN orders o ON e.id = o.employee_id JOIN order_items oi ON o.id = oi.order_id GROUP BY o.employee_id;

SELECT p.name, SUM(oi.price * oi.amount * (1 - oi.discount)) AS sales FROM products p JOIN order_items oi ON p.id = oi.product_id GROUP BY oi.product_id HAVING sales < 12000;

SELECT p.name, s.name AS supplier, SUM(oi.price * oi.amount * (1 - oi.discount)) AS sales FROM products p JOIN suppliers s ON p.supplier_id = s.id JOIN order_items oi ON p.id = oi.product_id GROUP BY oi.product_id ORDER BY sales DESC LIMIT 5;

SELECT p.id, p.name, SUM(oi.amount) AS total FROM products p JOIN order_items oi ON p.id = oi.product_id GROUP BY oi.product_id ORDER BY total DESC LIMIT 1;

SELECT c.id AS cus_id, c.name AS cusName, p.id AS pro_id, p.name AS proName, SUM(oi.amount) AS total_amount, SUM(oi.price * oi.amount * (1 - oi.discount)) AS total_price FROM customers c JOIN orders o ON c.id = o.customer_id JOIN order_items oi ON o.id = oi.order_id JOIN products p ON oi.product_id = p.id GROUP BY p.id, c.id ORDER BY c.id, p.id;
SELECT * FROM orders o JOIN order_items oi ON o.id = oi.order_id JOIN customers c ON o.customer_id = c.id JOIN products p ON oi.product_id = p.id;
SELECT c.id AS customer_id, c.name AS customer_name, p.id AS product_id, p.name AS product_name, 
SUM(oi.amount) AS total_amount, SUM(oi.price * oi.amount * (1 - oi.discount)) AS total_sale
FROM orders o JOIN order_items oi ON o.id = oi.order_id JOIN customers c ON o.customer_id = c.id 
JOIN products p ON oi.product_id = p.id GROUP BY c.id, p.id;

SELECT c.name AS cusName, SUM(oi.amount) AS hygienaAmount FROM customers c JOIN orders o ON c.id = o.customer_id JOIN order_items oi ON o.id = oi.order_id JOIN products p ON oi.product_id = p.id WHERE p.name LIKE "%ไฮยีน่า" GROUP BY c.id ORDER BY hygienaAmount DESC LIMIT 5;

SELECT c.name AS cusName, SUM(oi.price * oi.amount * (1 - oi.discount)) AS sales FROM customers c JOIN orders o ON c.id = o.customer_id JOIN order_items oi ON o.id = oi.order_id GROUP BY o.customer_id HAVING sales > 10000 ORDER BY sales DESC;

