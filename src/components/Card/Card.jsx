import styles from "./Card.module.css";

export function Card({ children, className = "" }) {
  return <article className={`${styles.card} ${className}`}>{children}</article>;
}

export function CardHeader({ title, subtitle, meta }) {
  return (
    <div className={styles.cardHeader}>
      <div>
        <h2 className={styles.cardTitle}>{title}</h2>
        {subtitle && <p className={styles.cardSubtitle}>{subtitle}</p>}
      </div>
      {meta && <span className={styles.cardMeta}>{meta}</span>}
    </div>
  );
}

export function CardBody({ children }) {
  return <div className={styles.cardBody}>{children}</div>;
}