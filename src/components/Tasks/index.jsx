import Task from "../Task";
import styles from "./tasks.module.css";

const Tasks = ({ tasks, onComplete, onDelete }) => {
    const tasksQuality = tasks.length;
    const completedTasks = tasks.filter((task) => task.isCompleted).length;
    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Create tasks</p>
                    <span>{tasksQuality}</span>
                </div>
                <div>
                    <p>Completed</p>
                    <span>
                        {completedTasks} of {tasksQuality}
                    </span>
                </div>
            </header>
            <div className={styles.list}>
                {tasks.map((task) => {
                    return <Task key={task.id} task={task} onComplete={onComplete} onDelete={onDelete} />;
                })}
            </div>
        </section>
    );
};

export default Tasks;
