USE cc10_todo_list;

SELECT * FROM todos t JOIN users u ON t.user_id = u.id;

SELECT * FROM users u LEFT JOIN todos t ON u.id = t.user_id;