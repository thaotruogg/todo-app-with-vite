import viteLogo from "../../assets/vite.svg";
import styles from "./header.module.css";
import { UilPlusCircle } from "@iconscout/react-unicons";
import { useRef } from "react";
const Header = ({ onAddTask }) => {
    const titleRef = useRef("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (titleRef.current.value === "") {
            return;
        } else {
            onAddTask(titleRef.current.value);
            titleRef.current.value = "";
        }
    };
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={viteLogo} alt="" width={42} />
                <h2>TODO APP</h2>
            </div>
            <form onSubmit={(e) => handleSubmit(e)} className={styles.newTaskForm}>
                <input type="text" placeholder="add a new task" ref={titleRef} />
                <button type="submit" className="btn">
                    Create
                    <UilPlusCircle size={24} />
                </button>
            </form>
        </header>
    );
};

export default Header;
