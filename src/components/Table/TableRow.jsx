// TableRow.jsx

import styles from "./TableRow.module.css";

export default function TableRow({ children, head = false }) {
  const Component = head ? "th" : "td";
  return <Component className={head ? styles.tableHeadCell : styles.tableCell}>{children}</Component>;
}