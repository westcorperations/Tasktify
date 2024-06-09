// to do list
import React, { useState } from "react";
import DeleteIcon from "../assets/deleteicon.svg";
import DoneIcon from "../assets/doneicon.svg";
import EditIcon from "../assets/editicon.svg";

interface Task {
    id: number;
    text: string;
    completed: boolean;
}
const Index: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState<string>("");
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTask(e.target.value);
    };

    const handleAddtask = () => {
        if (newTask.trim() === "") return;

        const newTaskObject: Task = {
            id: Date.now(),
            text: newTask,
            completed: false,
        };
        setTasks([...tasks, newTaskObject]);
        setNewTask("");
    };

    const handleDelete = (id: number) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const handleComplete = (id: number) => {
        setTasks(
            tasks.map((task) =>
                task.id == id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <div className="flex flex-col gap-y-6 w-full lg:max-w-xl ">
            <div className="w-full border-gray-500 border-2 flex gap-x-2  justify-between rounded-xl">
                <input
                    type="text"
                    value={newTask}
                    onChange={handleInputChange}
                    placeholder="add task"
                    className="w-full px-3 rounded-xl outline-none"
                    id=""
                />
                <button
                    type="button"
                    onClick={handleAddtask}
                    className="border-gray-500 border-2 rounded-md text-2xl hover:bg-green-200 hover:text-black text-center m-2 py-1 px-3"
                >
                    +
                </button>
            </div>
            <div className=" bg-gray-200  rounded-xl  p-4 items-center grid grid-col-1 gap-y-4 ">
                {tasks.map((task) => (
                    <div
                        key={task.id}
                        className={`flex bg-white items-center my-4 mx-3 rounded-xl flex-row justify-between p-4 ${task.completed ? "line-through" : ""
                            }`}
                    >
                        <div className="flex  justify-between items-center gap-x-2">
                            <button
                                type="button"
                                onClick={() => handleComplete(task.id)}
                                className="hover:bg-gray-100 w-20"
                            >
                                <img src={DoneIcon} className="w-9 h-9" alt="done" />
                            </button>
                            <p className="text-sm px-3 lg:text-base">{task.text}</p>
                        </div>
                        <div>
                            <button
                                type="button"
                                className=""
                                onClick={() => handleDelete(task.id)}
                            >
                                <img src={DeleteIcon} className="w-5 h-5" alt="delete" />
                            </button>
                            {/* <button type="button" className="">
                                <img src={EditIcon} className="w-5 h-5" alt="delete" />
                            </button> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Index;
