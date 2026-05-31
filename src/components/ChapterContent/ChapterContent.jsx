import React from "react";
import ContextCard from "./ContextCard.jsx";
import AnalogyCard from "./AnalogyCard.jsx";
import MisconceptionsCard from "./MisconceptionsCard.jsx";
import ExamTipsCard from "./ExamTipsCard.jsx";
import KeyTakeawayCard from "./KeyTakeawayCard.jsx";
import ConnectionsCard from "./ConnectionsCard.jsx";
import ObjectivesCard from "./ObjectivesCard.jsx";
import KeyConceptsCard from "./KeyConceptsCard.jsx";
import AdditionalPointsCard from "./AdditionalPointsCard.jsx";
import ExercisesCard from "./ExercisesCard.jsx";
import ComparisonTable from "../ComparisonTable/ComparisonTable.jsx";
import styles from "./ChapterContent.module.css";

export default function ChapterContent({ chapter }) {
  return (
    <div className={styles.chapterContent}>
      <ContextCard items={chapter.contextAndPrerequisites} />
      <AnalogyCard text={chapter.realWorldAnalogy} />
      <MisconceptionsCard items={chapter.commonMisconceptions} />
      <ExamTipsCard items={chapter.examTips} />
      <KeyTakeawayCard text={chapter.keyTakeaway} />
      <ConnectionsCard items={chapter.furtherConnections} />
      <ObjectivesCard items={chapter.objectives} />
      <KeyConceptsCard items={chapter.keyConcepts} contentText={chapter.content} />
      <AdditionalPointsCard items={chapter.additionalKeyPoints} />
      
      {chapter.comparisonTable && (
        <ComparisonTable
          title={chapter.comparisonTable.title}
          subtitle={chapter.comparisonTable.subtitle}
          badge={chapter.comparisonTable.badge}
          headers={chapter.comparisonTable.headers}
          rows={chapter.comparisonTable.rows}
        />
      )}
      
      <ExercisesCard exercises={chapter.exercises} />
    </div>
  );
}