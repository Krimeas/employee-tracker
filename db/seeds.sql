USE employee_tracker_db;

--  original seeds for the Database for testing and demonstrations.
INSERT INTO department (id, dept_name)
VALUES  (1, "Fabrication"),
        (2, "Assembly"),
        (3, "Machine Shop"),
        (4, "Paint"),
        (5, "Corporate"),
        (6, "Front Office");

INSERT INTO roles (id, roles_title, roles_salary, dept_id)
VALUES  (1, "CEO", 120000, 5),
        (2, "General Manager", 85000, 5),
        (3, "Manager", 70000, 1),
        (4, "General Labor", 40000, 1),
        (5, "Accounting", 50000, 6),
        (6, "Sales", 55000, 6);

INSERT INTO employees (id, first_name, last_name, roles_id, manager_id)
VALUES  (1, "Leviton", "Johnson", 1, 5),
        (2, "Peliton", "Jackson", 2, 6),
        (3, "James", "Ford", 3, 1),
        (4, "Dodge", "Williams", 4, 1),
        (5, "Sierra", "Daniels", 5, 6),
        (6, "Alicia", "Ravira", 6, 6);