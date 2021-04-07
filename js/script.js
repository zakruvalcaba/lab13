// VIEW EMPLOYEES
function view(employees) {
    // VARIABLE FOR EMPLOYEE NUMBERS
    let i = 1;
    // LOOP THROUGH EMPLOYEES ARRAY
    employees.forEach(employee => {
        console.log(`${String(i)}. ${employee}`);
        i++;
    });
    console.log('');
}

// ADD EMPLOYEE
function add(employees) {
    // PROMPT USER FOR EMPLOYEE TO ADD
    let employee = prompt('Enter the employee\'s name');
    // ADD EMPLOYEE TO ARRAY
    employees.push(employee);
    // SHOW SUCCESS MESSAGE
    console.log(`${employee} was added.`);
    console.log('');
}

// DELETE EMPLOYEE
function del(employees) {
    // PROMPT USER FOR EMPLOYEE NUMBER TO DELETE
    let empNum = parseInt(prompt('Enter the employee\'s number to delete'));
    // MAKE SURE EMPLOYEE NUMBER IS VALID
    if (!empNum < 1 || !empNum > employees.length) {
        // SPLICE OUT EMPLOYEE TO DELETE
        let employee = employees.splice(empNum - 1, 1);
        // SHOW SUCCESS MESSAGE
        console.log(`${employee} was deleted.`);
        console.log('');
    } else {
        alert('Invalid employee number.');
    }
}

// FUNCTION TO CALL WHEN PAGE LOADS
function init() {
    // BEGIN BY SHOWING MAIN MENU
    console.log('Employee Management Application');
    console.log('-------------------------------');
    console.log('COMMAND MENU');
    console.log('view - Show all employees');
    console.log('add - Add an employee');
    console.log('del - Delete an employees');
    console.log('exit - Exit application');
    console.log('');

    // CREATE A TEMPORARY ARRAY OF EMPLOYEES
    let employees = [
        'Zak Ruvalcaba',
        'Sally Smith',
        'Joe Johnson',
        'Pedro Ramirez',
        'Stew Franklin'
    ];

    // KEEP COMMAND MENU UP UNTIL USER DECICES TO END PROGRAM
    while(true) {
        // ASK THE USER FOR COMMAND
        let command = prompt('Enter command');
        // CHECK TO SEE IF THE USER CANCELLED THE PROMPT
        if (command !== null) {
            // CONVERT VALUE TO LOWER CASE
            command = command.toLowerCase();
            // CHECK THE COMMAND ENTERED
            if (command === 'view') {
                // VIEW EMPLOYEES
                view(employees);
            } else if (command === 'add') {
                // ADD EMPLOYEE
                add(employees);
            } else if (command === 'del') {
                // DELETE EMPLOYEE
                del(employees);
            } else if (command === 'exit') {
                // EXIT APPLICATION
                break;
            } else {
                alert('This is not a valid value.');
            }
        } else {
            alert('Please enter a value.');
        }
    }

    console.log('Program terminated.');
}
init();