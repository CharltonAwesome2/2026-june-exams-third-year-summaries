import { Card, CardHeader, CardBody } from "@components/Card/Card.jsx";
import styles from "./ChapterContent.module.css";

export default function KeyTakeawayCard({ text }) {
  if (!text) return null;
  return (
    <Card>
      <CardHeader title="Key Takeaway" meta="Remember This" />
      <CardBody>
        <div className={styles.keyTakeawayBox}>
          <p>{text}</p>
        </div>
      </CardBody>
    </Card>
  );
}