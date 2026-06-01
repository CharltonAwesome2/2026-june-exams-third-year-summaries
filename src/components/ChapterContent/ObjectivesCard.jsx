// ObjectivesCard.jsx

import { Card, CardHeader, CardBody } from "@components/Card/Card.jsx";
import styles from "./ChapterContent.module.css";

export default function ObjectivesCard({ items }) {
  if (!items || items.length === 0) return null;
  return (
    <Card>
      <CardHeader title="Chapter Overview" subtitle="Key Learning Objectives" meta="Objectives" />
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