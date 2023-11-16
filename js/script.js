// GLOBAL VARIABLES
let storage
let list
let task
let tasks = []

// GET THE DOM ELEMENTS
const $ = id => document.getElementById(id)

// DISPLAY LIST OF TASKS
function displayTaskList() {
    // IF THERE ARE NO TASKS IN ARRAY, CHECK STORAGE
    if (tasks.length === 0) {
        // GET TASKS FROM STORAGE OR EMPTY STRING IF STORAGE IS ALSO EMPTY
        storage = localStorage.getItem('tasks') || ''
        // IF NOT EMPTY, CONVERT STRING TO ARRAY AND STORE IN TASKS VARIABLE
        if (storage.length > 0) {
            // tasks = storage.split('|') // WITHOUT JSON.PARSE
            tasks = JSON.parse(localStorage.getItem('tasks'))
        }
    }

    // IF THERE ARE TASKS IN THE ARRAY...
    // SORT AND CREATE TASKS STRING
    // THEN DISPLAY STRING WITHIN TEXTAREA
    if (tasks.length > 0) {
        tasks.sort()            // SORT
        list = tasks.join('\n') // APPEND LINE BREAK

        // DISPLAY TASKS STRING
        $('task_list').value = list
    }
}

// ADD TO TASK LIST
function addToTaskList() {
    if ($('task').value !== '') {
        // ADD TASK TO ARRAY
        tasks.push($('task').value)
        // ADD TASK TO STORAGE
        // localStorage.setItem('tasks', tasks.join('|')) // WITHOUT JSON.STRINGIFY
        localStorage.setItem('tasks', JSON.stringify(tasks))
        // CLEAR THE TEXT BOX
        $('task').value = ''
        // SHOW UPDATED TASKS
        displayTaskList()
    } else {
        alert('Please enter a task.')
    }
}

// CLEAR TASK LIST
function clearTaskList() {
    tasks.length = 0                    // EMPTY ARRAY
    localStorage.removeItem('tasks')    // REMOVE TASKS FROM STORAGE
    $('task_list').value = ''           // CLEAR OUT TASK LIST FIELD
}

// WIRE UP EVENT HANDLERS AND DISPLAY TASKS IN LIST
$('add_task').addEventListener('click', addToTaskList)
$('clear_tasks').addEventListener('click', clearTaskList)
displayTaskList()