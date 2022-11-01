const inquirer = require('inquirer');
const express = require('express');
const connection = require('./db/connection');
const cTable = require('console.table')

// required external npm modules/files


const app = express();

app.use(express.json());

const showRoles = () => {
  connection.promise().query(`SELECT * FROM roles`).then((results) => console.table(`\n`, results[0], `\n\n\n\n\n\n`))
  startPrompt();  
}


//new member function, runs on start.  Prompts to answer what type of employee.  Depending on answer, fires off a function, for each employee type, or creates HTML with answers stored in the array if answer is 'no' they do not want to add another employee.  
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
         break;
        case 'Show Departments':
          console.table(department)
          startPrompt();
          break;
        case 'Show Employees':
          console.table(employees)
          startPrompt();
          break;
        case 'Add Role':
          createRole();
          console.log('Using create Role function.');
          break;
        case 'Department':
          createDepartment();
          console.log('Using create Department function.');
          break;
        case 'Employee':
          createEmployee();
          console.log('Using create Employee function.');
          break;
        default:
          console.log(`Press ctrl C to exit the loop.`)
      }
    })

}

//create manager function includes manager specific employee question then pushes 'newManager' answers to myTeam array. startPrompt() added to refire/loop into the origin function for continuing to add employees to myTeam array.
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
      connection.promise().query(`INSERT INTO roles (roles_title, roles_salary)
      VALUES (?, ?)`, ([answers.roles_title, answers.roles_salary])).then(startPrompt())
    });

}  
// connection.promise().query(`SELECT * FROM roles`).then((results) => console.table(`\n`, results[0], `\n\n\n\n\n\n`))
      // app.post('/db/seeds', ({ body }, res) => {
      //   const sql = `INSERT INTO roles (roles_title, roles_salary)
      //     VALUES (?)`;
      //   const param1 = [body.roles_title];
      //   const param2 = [body.roles_salary];
        
      //   connection.query(sql, param1, param2, (err, result) => {
      //     if (err) {
      //       res.status(400).json({ error: err.message });
      //       return;
      //     }
      //     res.json({
      //       message: 'success',
      //       data: body
      //     });
        // });


    // });
    // .then((data) => {
    //   const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
  
    //   fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    //     err ? console.log(err) : console.log('Success!')
    //   );
    // });

    

 
// //create manager function includes Engineer specific employee question then pushes 'newEngineer' answers to myTeam array. startPrompt() added to refire/loop into the origin function for continuing to add employees to myTeam array.
// const createDepartment = () => {
//   inquirer
//     .prompt([
//       {
//         type: 'input',
//         name: "dept_name",
//         message: "What is the department's name?",
//       },
 
//     ]).then((answers) => {
//       app.post('/api/new-movie', ({ body }, res) => {
//         const sql = `INSERT INTO roles (dept_name)
//           VALUES (?)`;
//         const param1 = [body.dept_name];
        
//         connection.query(sql, param1, (err, result) => {
//           if (err) {
//             res.status(400).json({ error: err.message });
//             return;
//           }
//           res.json({
//             message: 'success',
//             data: body
//           });
//         });
//       });
//       startPrompt();
//     });
// }

// //create manager function includes Intern specific employee question then pushes 'newIntern' answers to myTeam array. startPrompt() added to refire/loop into the origin function for continuing to add employees to myTeam array.
// const createEmployee = () => {
//   inquirer
//     .prompt([
//       {
//         type: 'input',
//         name: "first_name",
//         message: "What is the employee's first name?",
//       },
//       {
//         type: 'input',
//         name: "last_name",
//         message: "What is the employee's last name?",
//       },
//       {
//         type: 'input',
//         name: "roles_title",
//         message: "What is the employee's role?",
//       },  
//       {
//         type: 'input',
//         name: "dept_name",
//         message: "What is the employee's department?",
//       },
//     ]).then((answers) => {
//       app.post('/api/new-movie', ({ body }, res) => {
//         const sql = `INSERT INTO employees (first_name, last_name, roles_title, dept_name)
//           VALUES (?)`;
//         const param1 = [body.first_name];
//         const param2 = [body.last_name];
//         const param3 = [body.roles_title];
//         const param4 = [body.dept_name];
        
//         connection.query(sql, param1, param2, param3, param4, (err, result) => {
//           if (err) {
//             res.status(400).json({ error: err.message });
//             return;
//           }
//           res.json({
//             message: 'success',
//             data: body
//           });
//         });
//       });
//       startPrompt();
//     });
// }

// // Clicking no on request for employee type will exit function and write files.  
// // HTML File should take input from these and then write larger HTML file, this will only write the starterHTMl.  Need to get it to apply the answers to the prompts to append to an script.js which will then append data into the generated HTML.  Link included to script.js on HTML file.  Formal in Bootstrap. 
// const createHTML = () => {
//   fs.writeFile('./dist/index.html', StartHTML, 'UTF-8', (err) => {
//     (err) ? console.log(err) : console.log("sucess!")
//   })
// }



// starts the new member function which will initialize other functions after answering the original question what type of employee.  Clicking no will exit function and write files.  
startPrompt();