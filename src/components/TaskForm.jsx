import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export function TaskForm() {
    const [title, setTitle] = useState("");
    const [descrip, setDescrip] = useState("");
    const { createTask } = useContext(TaskContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({
            title,
            descrip,
        });
        setTitle("");
        setDescrip("");
    };
    return (
        <div className="max-w-md mx-auto">
            <form className="bg-slate-900 p-10 mb-4" onSubmit={handleSubmit}>
                <h1 className="text-2xl font-bold text-white mb-3">
                    Creaa tu tarea
                </h1>
                <input
                    type="text"
                    placeholder="Escribe tu tarea"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    autoFocus
                    className="bg-slate-300 p-3 w-full mb-2"
                />
                <textarea
                    placeholder="Describe"
                    onChange={(e) => setDescrip(e.target.value)}
                    value={descrip}
                    className="bg-slate-300 p-3 w-full mb-2"
                ></textarea>
                <button className="bg-indigo-500 px-3 py-1 text-white">
                    Save
                </button>
            </form>
        </div>
    );
}

export default TaskForm;
