import React, {useState} from 'react'

const ToDoList = () => {

    const [tasks, setTasks] = useState(["eat breakfast", "take a shower", "walk a dog"]); // Fix here
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){

    }

    function deleteTask(index){

    }

    function moveTaskUp(index){

    }

    function moveTaskDown(index){

    }
    
  return (
    <><div className="to-do-list">
        <h1>To-Do-List</h1>
        <div>
            <input type="text" 
            placeholder='Enter a task...'
            value={newTask}
            onChange={handleInputChange}
            />
            <button className='add-button' onClick={addTask}>
                Add
            </button>

            <ol>
                {tasks.map((task, index) => 
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button
                    className="delete-button"
                    onClick={() => deleteTask(index)}>
                        Delete
                    </button>
                    <button
                    className="move-button"
                    onClick={() => moveTaskUp(index)}>
                        UP
                    </button>
                </li>)}
            </ol>
        </div>
        </div></>
  )
}

export default ToDoList