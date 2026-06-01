// ExercisesCard.jsx

import { useState } from "react";
import { Card, CardHeader, CardBody } from "@components/Card/Card.jsx";
import styles from "./ChapterContent.module.css";

export default function ExercisesCard({ exercises }) {
  const [expanded, setExpanded] = useState({});

  const toggleAnswer = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  if (!exercises || exercises.length === 0) {
    return (
      <Card>
        <CardHeader title="Exam Practice Questions" subtitle="Active Recall" meta="Revision" />
        <CardBody>
          <p className={styles.noExercises}>No practice questions available for this chapter yet.</p>
        </CardBody>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader title="Exam Practice Questions" subtitle="Active Recall" meta="Revision" />
      <CardBody>
        {exercises.map((ex, index) => (
          <div key={index} className={styles.exerciseItem}>
            <p>
              <strong>Q{index + 1}:</strong> {ex.q}
            </p>
            <button onClick={() => toggleAnswer(index)} className={styles.answerBtn}>
              {expanded[index] ? "Hide Answer" : "Show Model Answer"}
            </button>
            {expanded[index] && (
              <div className={styles.answerBox}>
                <strong>Answer:</strong>
                <br />
                {Array.isArray(ex.a) ? (
                  <ul className={styles.answerBullets}>
                    {ex.a.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{ex.a}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </CardBody>
    </Card>
  );
}