import styles from "./toggleChangeTheme.module.css";
import { UilMoon } from "@iconscout/react-unicons";
const ToggleChangeTheme = () => {
	const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
	const currentTheme = localStorage.getItem("theme");
	if (currentTheme == "dark") {
		document.body.classList.toggle("dark-theme");
	} else if (currentTheme == "light") {
		document.body.classList.toggle("light-theme");
	}
	const handleChangeTheme = () => {
		let theme = "";
        if (prefersDarkScheme.matches) {
            document.body.classList.toggle("light-theme");
            theme = document.body.classList.contains("light-theme") ? "light" : "dark";
        } else {
            document.body.classList.toggle("dark-theme");
            theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
        }
        localStorage.setItem("theme", theme);
    };
    return (
        <section className={styles.changeTheme}>
            <button className={styles.btnToggle} onClick={handleChangeTheme}>
                <span>
                    <UilMoon size={20} />
                </span>
            </button>
        </section>
    );
};

export default ToggleChangeTheme;
