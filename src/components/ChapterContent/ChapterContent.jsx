// ChapterContent.jsx (updated with new programming components)

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
import CodeBlock from "../CodeBlock/CodeBlock.jsx";
import ComponentTable from "../ComponentTable/ComponentTable.jsx";
import AnnotationTable from "../AnnotationTable/AnnotationTable.jsx";
import LayerCard from "../LayerCard/LayerCard.jsx";
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

      {/* New programming-specific components */}
      {chapter.codeExample && !chapter.codeExamples && (
        <CodeBlock
          title={chapter.codeExample.description}
          language={chapter.codeExample.language}
          code={chapter.codeExample.code}
        />
      )}

      {chapter.codeExamples &&
        chapter.codeExamples.map((example, idx) => (
          <CodeBlock key={idx} title={example.description} language={example.language} code={example.code} />
        ))}

      {chapter.componentTable && (
        <ComponentTable
          title={chapter.componentTable.title}
          subtitle={chapter.componentTable.subtitle}
          badge={chapter.componentTable.badge}
          components={chapter.componentTable.components}
        />
      )}

      {chapter.annotationTable && (
        <AnnotationTable
          title={chapter.annotationTable.title}
          subtitle={chapter.annotationTable.subtitle}
          badge={chapter.annotationTable.badge}
          annotations={chapter.annotationTable.annotations}
        />
      )}

      {chapter.testPatternsTable && (
        <ComponentTable
          title={chapter.testPatternsTable.title}
          subtitle={chapter.testPatternsTable.subtitle}
          badge={chapter.testPatternsTable.badge}
          components={chapter.testPatternsTable.patterns.map((p) => ({
            name: p.type,
            description: p.whatItChecks,
            examples: p.example,
          }))}
        />
      )}

      {chapter.layerCard && (
        <LayerCard
          title={chapter.layerCard.title}
          subtitle={chapter.layerCard.subtitle}
          badge={chapter.layerCard.badge}
          layers={chapter.layerCard.layers}
        />
      )}

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
