// Button.jsx

import styles from "./Button.module.css";

export default function Button({ children, active = false, onClick, type = "button" }) {
  return (
    <button
      type={type}
      className={`${styles.tabButton} ${active ? styles.tabButtonActive : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}