import styles from "./task.module.css";
import { UilTrashAlt,UilCheckCircle, UilCircle } from '@iconscout/react-unicons'

const Task = ({ task, onComplete, onDelete }) => {
	return (
		<div className={styles.task}>
			<button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
				{task.isCompleted ? <UilCheckCircle size={20} /> : <UilCircle size={20} />}
			</button>
			<p className={task.isCompleted ? styles.textCompleted : ""}>{task.title}</p>
			<button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
				<UilTrashAlt size={20} />
			</button>
		</div>
	)
}

export default Task;