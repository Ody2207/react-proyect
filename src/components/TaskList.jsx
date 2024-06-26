import { TaskCard } from "./taskCard";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

function TaskList() {
    const { task } = useContext(TaskContext);
    if (task.length === 0) {
        return <h1 className="text-white text-4xl font-bold text-center">No hay tareas aun</h1>;
    }
    return (
        <div className="grid grid-cols-4 gap-2">
            {task.map((task) => (
                <TaskCard key={task.id} info={task} />
            ))}
        </div>
    );
}

export default TaskList;
