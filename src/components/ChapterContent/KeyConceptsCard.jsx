import { Card, CardHeader, CardBody } from "@components/Card/Card.jsx";
import styles from "./ChapterContent.module.css";

export default function KeyConceptsCard({ items, contentText }) {
  if (!items || items.length === 0) return null;
  return (
    <Card>
      <CardHeader title="Key Concepts & Explanations" meta="Core" />
      <CardBody>
        <ul className={styles.bulletList}>
          {items.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
        {contentText && (
          <div className={styles.contentText}>
            <p>{contentText}</p>
          </div>
        )}
      </CardBody>
    </Card>
  );
}