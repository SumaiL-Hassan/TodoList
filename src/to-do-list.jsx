import React,{useState} from "react"
function TodoList(){
    const [task, setTask] = useState([]);
    const [newtask, setNewTask] = useState("")

    function handleInputChange(event){
        setNewTask(event.target.value)

    }
    function addTask(){

    }
    function deleteTask(index){

    }
    function importantTask(index){

    }
    function lessImportantTask(index){

    }
    return(
        <div>
            <h1>To-do List Website by David Goggins</h1>
        <div className="input-section">
            <input type="text" placeholder="Enter a task..." value={newtask} onChange={handleInputChange} />
            <button className="btn-add">Add Task</button>
        </div>
        <div>
            <ul>
                <li>
                    <h1></h1>
                </li>
            </ul>
        </div>
    </div>)
}
export default TodoList

