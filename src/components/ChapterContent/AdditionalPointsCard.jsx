import { Card, CardHeader, CardBody } from "@components/Card/Card.jsx";
import styles from "./ChapterContent.module.css";

export default function AdditionalPointsCard({ items }) {
  if (!items || items.length === 0) return null;
  return (
    <Card>
      <CardHeader title="Additional Key Points" meta="Deep Dive" />
      <CardBody>
        <ul className={styles.bulletList}>
          {items.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
}