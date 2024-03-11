    import React,{useState} from "react";

    function ToDoList(){

            // States

            const [task, setTask] = useState([]);
            const [newTask, setNewTask] = useState("")

            // addTask

            function handleInputChange(event)
            {
                setNewTask(event.target.value)

            }


            function addTask()
            {
               if(newTask.trim()!=="")
               {
                    setTask(t =>[...t, newTask]);
                    setNewTask("");
               }
            }
            // deleteTask
            function deleteTask(index)
            {
                  const  updatedTask = task.filter((_, i)=> i !== index)
                    setTask(updatedTask);
            }
            // moveUptask
            function moveTaskUp(index)
            {
                if(index > 0){
                    const updatedTask = [...task];

                    [updatedTask[index], updatedTask[index -1]] =
                    [updatedTask[index - 1], updatedTask[index]];
                    setTask(updatedTask);
                }
            }
            // moveDowntask
            function moveTaskDown(index)
            {
                if(index < task.length -1){
                    const updatedTask = [...task];

                    [updatedTask[index], updatedTask[index +1]] =
                    [updatedTask[index + 1], updatedTask[index]];
                    setTask(updatedTask);
                }
            }

            return(
            <>
            <div className="to-do-list">

                <h1> To-Do-List </h1>
                   <div>
                   <input 
                        type="text"
                        placeholder="Enter a task..."
                        value={newTask}
                        onChange={handleInputChange}
                        
                        />

                   <button
                        className="add-button"
                        onClick={addTask}    >
                            ADD TASK
                    </button>     

                    </div> 
                    
                <ol>
                   {task.map((task, index) =>
                        <li key={index}>
                            <span className="text">{task}</span>
                            <button
                                className="delete-button"
                                onClick = { ()=>deleteTask(index)}
                                    >
                                Delete
                            </button>
                            <button
                                className="move-button"
                                onClick = { ()=>moveTaskUp(index)}
                                    >
                                ⬆️
                            </button>
                            <button
                                className="move-button"
                                onClick = { ()=>moveTaskDown(index)}
                                    >
                               ⬇️
                            </button>
                        </li>
                   )}

                </ol>

            </div>
            
            
            </>)

    }

    export default ToDoList;