// AnalogyCard.jsx

import { Card, CardHeader, CardBody } from "@components/Card/Card.jsx";
import styles from "./ChapterContent.module.css";

export default function AnalogyCard({ text }) {
  if (!text) return null;
  return (
    <Card>
      <CardHeader title="Real-World Analogy" meta="Understanding" />
      <CardBody>
        <p className={styles.analogyText}>{text}</p>
      </CardBody>
    </Card>
  );
}