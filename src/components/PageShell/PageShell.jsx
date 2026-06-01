// PageShell.jsx

import styles from "./PageShell.module.css";

export default function PageShell({ children, title, subtitle, badge }) {
  return (
    <section className={styles.pageShell}>
      <header className={styles.pageShellHeader}>
        <div>
          {badge && <p className={styles.pageShellBadge}>{badge}</p>}
          <h1 className={styles.pageShellTitle}>{title}</h1>
          {subtitle && <p className={styles.pageShellSubtitle}>{subtitle}</p>}
        </div>
      </header>
      <div className={styles.pageShellBody}>{children}</div>
    </section>
  );
}