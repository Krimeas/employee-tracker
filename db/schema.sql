DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

-- Each table references specifics instead of just 'id' so that I can read and see the correlation easier.  
CREATE TABLE department (
  dept_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  dept_name VARCHAR(30)
);

CREATE TABLE roles (
  roles_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  roles_title VARCHAR(30),
  roles_salary DECIMAL,
  dept_it INT 
  FOREIGN KEY (dept_id)
  REFERENCES deptartment(dept_id)
  ON DELETE SET NULL
);

CREATE TABLE employees (
  employees_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR (30),
  roles_id INT 
  manager_id INT
  FOREIGN KEY (roles_id)
  REFERENCES roles(roles_id)
  ON DELETE SET NULL
);