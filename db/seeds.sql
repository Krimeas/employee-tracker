USE employee_tracker_db;

INSERT INTO department (id, dept_name)
VALUES  (1, "Fabrication"),
        (2, "Assembly"),
        (3, "Machine Shop"),
        (4, "Paint"),
        (5, "Corporate"),
        (6, "Front Office");

INSERT INTO roles (id, roles_title, roles_salary, dept_id)
VALUES  (1, "CEO", 120000, ),
        (2, "General Manager", 85000, ),
        (3, "Manager", 70000, ),
        (4, "General Labor", 40000, ),
        (5, "Accounting", 50000, ),
        (6, "Sales", 55000, );

INSERT INTO employees (id, first_name, last_name)
VALUES  (1, "Leviton", "Johnson"),
        (2, "Peliton", "Jackson"),
        (3, "James", "Ford"),
        (4, "Dodge", "Williams"),
        (5, "Sierra", "Daniels"),
        (6, "Alicia", "Ravira");