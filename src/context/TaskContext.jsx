import { createContext, useState, useEffect} from "react";
import { tasks as data } from "../data/task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
    const [task, setTask] = useState([]);
    useEffect(() => {
        setTask(data);
    }, []);

    function createTask(info) {
        setTask([
            ...task,
            {
                title: info.title,
                id: task.length,
                descripcion: info.descrip,
            },
        ]);
    }

    function deleteTask(taskId) {
        setTask(task.filter((task) => task.id !== taskId));
    }
    return (
        <TaskContext.Provider
            value={{
                task,
                deleteTask,
                createTask,
            }}
        >
            {props.children}
        </TaskContext.Provider>
    );
}
