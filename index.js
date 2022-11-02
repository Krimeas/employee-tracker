const inquirer = require('inquirer');
const express = require('express');
const connection = require('./db/connection');
const cTable = require('console.table')
// required external npm modules/files


const app = express();

app.use(express.json());

// Show roles, departments, employees tables functions for printing from the database using select * in the console.
const showRoles = () => {
  connection.promise().query(`SELECT * FROM roles`).then((results) => console.table(`\n`, results[0], `\n\n\n\n\n\n`));
}

const showDepartments = () => {
  connection.promise().query(`SELECT * FROM department`).then((results) => console.table(`\n`, results[0], `\n\n\n\n\n\n`))
}

const showEmployees = () => {
  connection.promise().query(`SELECT * FROM employees`).then((results) => console.table(`\n`, results[0], `\n\n\n\n\n\n`))
}


//Initial prompt for firing off other functions for showing all three tables and firing off functions for creating new portions of those tables.  
function startPrompt() {
  inquirer.prompt([
    {
      type: 'list',
      name: "form",
      message: "What would you like to do?",
      choices: ['Show Roles', 'Show Departments','Show Employees','Add Role', 'Add Department', 'Add Employee', 'Exit']
    },
  ]).then((choice) => {
      switch (choice.form) {
        case 'Show Roles':
          showRoles();
          startPrompt();  
         break;
        case 'Show Departments':
          showDepartments();
          startPrompt();  
          break;
        case 'Show Employees':
          showEmployees();
          startPrompt();  
          break;
        case 'Add Role':
          createRole();
          console.log('Using create Role function.');
          break;
        case 'Add Department':
          createDepartment();
          console.log('Using create Department function.');
          break;
        case 'Add Employee':
          createEmployee();
          console.log('Using create Employee function.');
          break;
        default:
          console.log(`Press ctrl C to exit the loop.`)
      }
    })

}

//create ROle function.  Takes in Roles Title and Roles Salary data and assignes a unique ID for each role.  Restarts the initial prompt when complete and.   
const createRole = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: "roles_title",
        message: "What is the roles title?",
      },
      {
        type: 'input',
        name: "roles_salary",
        message: "What is the pay for this role? (example: 100000)",
      }, 
    ]).then((answers) => {
      connection.promise().query(`INSERT INTO roles (roles_title, roles_salary) VALUES (?, ?)`, ([answers.roles_title, answers.roles_salary])).then(startPrompt())
    });

} 
 
//Creates a department requesting only the name of that department and assigning a unique ID. Restarts the initial prompt when complete and.
const createDepartment = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: "dept_name",
        message: "What is the department's name?",
      },
    ]).then((answers) => {
      connection.promise().query(`INSERT INTO department (dept_name) VALUES (?)`, ([answers.dept_name])).then(startPrompt())
    });
}

//Creates and employee, for the employees table in the database.  takes in first name, last name, role ID and manager ID.  Restarts the initial prompt when complete and.
const createEmployee = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: "first_name",
        message: "What is the employee's first name?",
      },
      {
        type: 'input',
        name: "last_name",
        message: "What is the employee's last name?",
      },
      {
        type: 'input',
        name: "roles_id",
        message: "What is the Id of the employees role?",
      },  
      {
        type: 'input',
        name: "manager_id",
        message: "What is their managers ID from the table?",
      },
    ]).then((answers) => {
      connection.promise().query(`INSERT INTO employees (first_name, last_name, roles_id, manager_id) VALUES (?, ?, ?, ?)`, ([answers.first_name, answers.last_name, answers.roles_id, answers.manager_id])).then(startPrompt())
    });
}




// starts the new initial  which will initialize other functions after answering the original question what type of employee.  Clicking Exit will exit function and write files.  
startPrompt();