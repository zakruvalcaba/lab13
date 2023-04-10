// GLOBAL VARIABLES
let storage
let list
let task
let tasks = []

// GET THE DOM ELEMENTS
const $ = (id) => {
    return document.getElementById(id)
}

// DISPLAY TASK LIST
const displayTaskList = () => {
    // IF THERE ARE NO TASKS IN ARRAY, CHECK STORAGE
    if (tasks.length === 0) {
        // GET TASKS FROM STORAGE OR EMPTY STRING IF STORAGE IS EMPTY
        storage = localStorage.getItem('tasks') || ''
        // IF NOT EMPTY, CONVERT TO ARRAY AND STORE IN TASKS VARIABLE
        if (storage.length > 0) {
            tasks = storage.split('|')
        }
    }
    
    // IF THERE ARE TASKS IN THE ARRAY...
    // SORT AND CREATE TASKS STRING
    if (tasks.length > 0) {
        tasks.sort()
        list = tasks.join('\n')

        // DISPLAY TASKS STRING
        $('task_list').value = list
    }
}

// ADD A TASK
const addToTaskList = () => {
    if ($('task').value !== '') {
        // ADD TASK TO ARRAY
        tasks.push($('task').value)
        // ADD TASK TO STRORAGE
        localStorage.setItem('tasks', tasks.join('|'))
        // CLEAR THE TEXT BOX
        $('task').value = ''
        // SHOW UPDATED TASKS
        displayTaskList()
    } else {
        alert('Please enter a task.')
    }
}

// CLEAR TASK LIST
const clearTaskList = () => {
    tasks.length = 0                    // EMPTY ARRAY
    localStorage.removeItem('tasks')    // REMOVE TASKS FROM STORAGE
    $('task_list').value = ''           // CLEAR OUT TASK LIST FIELD
}

// WIRE UP EVENT HANDLERS AND DISPLAY ANY TASKS IN LIST
window.addEventListener('load', () => {
    $('add_task').addEventListener('click', addToTaskList)
    $('clear_tasks').addEventListener('click', clearTaskList)
    displayTaskList()
})