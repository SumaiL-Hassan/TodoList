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
    function doneTask(index){
        const updatedTask = task.filter((_, i) => i !== index);
        setTask(updatedTask);
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
            <input class="border p-2 mr-2" type="text" placeholder="Enter a task..." value={newtask} onChange={handleInputChange} onKeyDown={handleInputChange}/>
            <button class="bg-green-500 border-1 rounded-lg p-2 " onClick={addTask}>Add Task</button>
        </div>
        <div class=" mt-5  ">
            <ol>
                {task.map((task, index) =>
                <li key = {index}  class="flex items-center justify-between gap-4">
                    <span >{task}</span>
                    <button class="bg-green-500 rounded-lg border-1 p-2 mt-2" 
                        onClick={()=> doneTask(index)}>
                        Done
                    </button>
                    <button class="bg-cyan-400 rounded-lg border-1 p-2 ml-auto mt-2"
                        
                        onClick={() => deleteTask(index)}>
                        Delete
                    </button>
                    <button class="bg-emerald-400 rounded-lg border-1 p-2 mt-2 "
                        
                        onClick={() => importantTask(index)}>
                        &#128102;&#127997;
                    </button>
                    <button class="bg-zinc-500 rounded-lg border-1 p-2 mt-2"
                        
                        onClick={() => lessImportantTask(index)}>
                        &#128102;&#127999;
                    </button>

                </li>)}
            </ol>
        </div>
    </div>)
}
export default TodoList

