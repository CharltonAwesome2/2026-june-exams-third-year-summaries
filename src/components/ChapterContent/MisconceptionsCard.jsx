import { Card, CardHeader, CardBody } from "@components/Card/Card.jsx";
import styles from "./ChapterContent.module.css";

export default function MisconceptionsCard({ items }) {
  if (!items || items.length === 0) return null;
  return (
    <Card>
      <CardHeader title="Common Misconceptions" meta="Watch Out" />
      <CardBody>
        <ul className={styles.bulletList}>
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
}