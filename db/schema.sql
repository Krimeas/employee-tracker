DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

-- Department table, Primary key for roles.
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  dept_name VARCHAR(30)
);

-- Roles table.  Sets primary key for employees
CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  roles_title VARCHAR(30),
  roles_salary DECIMAL,
  dept_id INT, 
  FOREIGN KEY (dept_id)
  REFERENCES department(id)
  ON DELETE SET NULL
);

-- Employees table, pulls from roles ID.  
CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR (30),
  roles_id INT,
  manager_id INT,
  FOREIGN KEY (roles_id) 
  REFERENCES roles(id)
  ON DELETE SET NULL
  -- FOREIGN KEY (manager_id) 
  -- REFERENCES employees(id)
  -- ON DELETE SET NULL
);