import { useState, ChangeEvent } from "react"
import './ToDo.css'

interface ITodo {
    taskName: string;
}

const ToDo = () => {
    //Managing State
    const [task, setTask] = useState<string>("");
    const [taskList, setTaskList] = useState<ITodo[]>([]);

    //adding a handlechange or event change state
    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "task") {
            setTask(event.target.value);
        }
    };

    // adding tasks
    const addTask = (): void => {
        const newTask = {
            taskName: task
        };
        setTaskList([...taskList, newTask])
        console.log(taskList)
        setTask("")
    };

    // delete tasks
    const removeTask = (taskNameDelete: string): void => {
       return setTaskList(taskList.filter((task) => {task.taskName !== taskNameDelete}))
    }

    return (
        <>
            <h2 className="header">Kevin's To-Do List</h2>
            {/* // add an input to add tasks */}
            <div className="input-container">
                <input
                    className="task-input"
                    type="text"
                    id="to-do"
                    name="task"
                    value={task}
                    placeholder="Things to do..."
                    onChange={handleChange} />
            </div>
            {/* // add a button to submit the tasks to a list */}
            <div className="add-btn">
                <button onClick={addTask}>Add Task</button>
            </div>

            <div className="task-list">
                {taskList.map((task, idx) => {
                    return <li key={idx}>
                        { task.taskName }                     
                        <button onClick={() => removeTask(task.taskName)}>X</button>    
                    </li>
                })}
            </div>
        </>
    )
}
export default ToDo