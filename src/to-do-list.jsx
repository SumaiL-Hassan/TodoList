import React,{useState} from "react"
function TodoList(){
    const [task, setTask] = useState([]);
    const [newtask, setNewTask] = useState("")
    
    function handleInputChange(event){
        setNewTask(event.target.value)
        if(event.key === "Enter"){
            addTask();
        }
    }
    function addTask(){

        if (newtask.trim() !== ""){
            setTask(t => [...t, newtask]);
            setNewTask("");
        }
    }
    function deleteTask(index){
        const updatedTask = task.filter((_, i) => i !== index);
        setTask(updatedTask);
        
    }
    function importantTask(index){
        if(index > 0){
            const updatedTask = [...task];
            [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1 ], updatedTask[index]]
            setTask(updatedTask);
        }
    }
    function lessImportantTask(index){
        if(index < task.length - 1){
            const updatedTask = [...task];
            [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
            setTask(updatedTask);
        }
        

    }
    return(
        <div class=" flex flex-col items-center justify-center mt-23 font-poppins text-2xl ">
            <h1 class="text-5xl">To-do List Website by David Goggins</h1>
        <div class="mt-20">
            <input type="text" placeholder="Enter a task..." value={newtask} onChange={handleInputChange} onKeyDown={handleInputChange}/>
            <button onClick={addTask}>Add Task</button>
        </div>
        <div class="mt-5">
            <ol>
                {task.map((task, index) =>
                <li key = {index}>
                    <span class="mr-5">{task}</span>
                    <button class="bg-white-500"
                        
                        onClick={() => deleteTask(index)}>
                        Delete
                    </button>
                    <button
                        
                        onClick={() => importantTask(index)}>
                        &#128102;&#127997;
                    </button>
                    <button
                        
                        onClick={() => lessImportantTask(index)}>
                        &#128102;&#127999;
                    </button>

                </li>)}
            </ol>
        </div>
    </div>)
}
export default TodoList

