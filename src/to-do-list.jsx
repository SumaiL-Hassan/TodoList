import React,{useState} from "react"
function TodoList(){
    const [task, setTask] = useState(["go to school"]);
    const [newtask, setNewTask] = useState("")
    /*function inputEnter(event){
        if 
    }*/
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
        <div>
            <h1>To-do List Website by David Goggins</h1>
        <div className="input-section">
            <input type="text" placeholder="Enter a task..." value={newtask} onChange={handleInputChange} onKeyDown={handleInputChange}/>
            <button className="btn-add" onClick={addTask}>Add Task</button>
        </div>
        <div>
            <ol>
                {task.map((task, index) =>
                <li key = {index}>
                    <span className="task">{task}</span>
                    <button
                        className="delete-button"
                        onClick={() => deleteTask(index)}>
                        Delete
                    </button>
                    <button
                        className="importantTask-button"
                        onClick={() => importantTask(index)}>
                        &#128102;&#127997;
                    </button>
                    <button
                        className="lessImportantTask-button"
                        onClick={() => lessImportantTask(index)}>
                        &#128102;&#127999;
                    </button>

                </li>)}
            </ol>
        </div>
    </div>)
}
export default TodoList

