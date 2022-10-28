import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const LOCAL_STORAGE_KEY = "todo:savedTasks";

function App() {
    const [tasks, setTasks] = useState([]);

    const loadSavedTasks = () => {
        const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (saved) {
            setTasks(JSON.parse(saved));
        }
    };

    useEffect(() => {
        loadSavedTasks();
    }, []);

    const setTasksAndSave = (newTasks) => {
        setTasks(newTasks);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
    };

    const addTask = (taskTitle) => {
        setTasksAndSave([
            ...tasks,
            {
                id: crypto.randomUUID(),
                title: taskTitle,
                isCompleted: false,
            },
        ]);
    };
    const deleteTaskById = (taskId) => {
        const newTask = tasks.filter((task) => task.id !== taskId);
        setTasksAndSave(newTask);
    };
    const toggleTaskCompletedById = (taskId) => {
        const newTasks = tasks.map((task) => {
            if (task.id === taskId) {
                return {
                    ...task,
                    isCompleted: !task.isCompleted,
                };
            }
            return task;
        });
        setTasksAndSave(newTasks);
    };
    return (
        <div>
            {/* <ToggleChangeTheme /> */}
            <Header onAddTask={addTask} />
            <Tasks tasks={tasks} onComplete={toggleTaskCompletedById} onDelete={deleteTaskById} />
        </div>
    );
}

export default App;
