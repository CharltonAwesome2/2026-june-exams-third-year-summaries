// App.jsx

import { useState } from "react";
import Button from "./components/Button/Button.jsx";
import PageShell from "./components/PageShell/PageShell.jsx";
import { Card, CardBody, CardHeader } from "./components/Card/Card.jsx";
import ComparisonTable from "./components/ComparisonTable/ComparisonTable.jsx";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle.jsx";
import { modules } from "./data/index.js";

import "./styles/global.css";
import "./styles/theme.css";
import styles from "./App.module.css";

export default function App() {
  const [selectedModuleId, setSelectedModuleId] = useState(null);
  const [activeTab, setActiveTab] = useState(null);

  const selectedModule = modules.find((m) => m.id === selectedModuleId);
  const activeChapter = selectedModule?.chapters.find((ch) => ch.id === activeTab) || selectedModule?.chapters[0];

  const toggleAnswer = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const [expanded, setExpanded] = useState({});

  const handleSelectModule = (moduleId) => {
    setSelectedModuleId(moduleId);
    setActiveTab(null); // Will default to first chapter (welcome)
  };

  const handleBackToModules = () => {
    setSelectedModuleId(null);
    setActiveTab(null);
    setExpanded({});
  };

  const isWelcome = activeChapter?.id?.includes("welcome");

  // Landing page - show all modules
  if (!selectedModuleId) {
    return (
      <div className="app">
        <header className={styles.topbar}>
          <div>
            <p className={styles.topbarEyebrow}>June 2026 • Third Year</p>
            <h1 className={styles.topbarTitle}>Third Year Module Summaries</h1>
          </div>
          <div className={styles.topbarActions}>
            <p className={styles.topbarNote}>Select a module to begin</p>
            <ThemeToggle />
          </div>
        </header>

        <div className={styles.moduleGrid}>
          {modules.map((module) => (
            <button
              key={module.id}
              className={styles.moduleCard}
              onClick={() => handleSelectModule(module.id)}
              style={{ borderTopColor: module.color }}
            >
              <span className={styles.moduleIcon}>{module.icon}</span>
              <h2 className={styles.moduleName}>{module.name}</h2>
              <p className={styles.moduleDescription}>{module.description}</p>
              <span className={styles.moduleCta}>View Summaries →</span>
            </button>
          ))}
        </div>

        <div className={styles.moduleFooter}>
          <p>More modules will appear here as they become available.</p>
        </div>
      </div>
    );
  }

  // Module view - show chapters for selected module
  return (
    <div className="app">
      <header className={styles.topbar}>
        <div>
          <button onClick={handleBackToModules} className={styles.backButton}>
            ← All Modules
          </button>
          <p className={styles.topbarEyebrow}>{selectedModule.name}</p>
          <h1 className={styles.topbarTitle}>{selectedModule.welcome.title}</h1>
        </div>
        <div className={styles.topbarActions}>
          <p className={styles.topbarNote}>{selectedModule.welcome.subtitle}</p>
          <ThemeToggle />
        </div>
      </header>

      <nav className={styles.tabbar}>
        {selectedModule.chapters.map((chapter) => (
          <Button
            key={chapter.id}
            active={activeTab === chapter.id || (!activeTab && chapter === selectedModule.chapters[0])}
            onClick={() => setActiveTab(chapter.id)}
          >
            {chapter.title}
          </Button>
        ))}
      </nav>

      <main className={styles.content}>
        <PageShell title={activeChapter.title} subtitle={activeChapter.subtitle} badge={activeChapter.badge}>
          {isWelcome ? (
            <>
              <Card>
                <CardHeader title="Welcome" subtitle={selectedModule.welcome.description} />
                <CardBody>
                  <p className={styles.lead}>
                    Select a chapter from the tabs above to view detailed summaries, key concepts, and exam-style
                    practice questions.
                  </p>
                  <div className={styles.chapterList}>
                    <p>
                      <strong>📚 Chapters in this module:</strong>
                    </p>
                    <ul>
                      {selectedModule.chapters
                        .filter((c) => !c.id.includes("welcome"))
                        .map((ch, idx) => (
                          <li key={ch.id}>
                            <strong>{ch.title}:</strong> {ch.subtitle}
                          </li>
                        ))}
                    </ul>
                  </div>
                  {selectedModule.welcome.overallRecommendations && (
                    <div className={styles.recommendations}>
                      <p>
                        <strong>💡 Overall Recommendations:</strong>
                      </p>
                      <ul>
                        {selectedModule.welcome.overallRecommendations.map((rec, idx) => (
                          <li key={idx}>{rec}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {selectedModule.welcome.studyTips && (
                    <div className={styles.studyTips}>
                      <p>
                        <strong>📖 Study Tips:</strong>
                      </p>
                      <ul>
                        {selectedModule.welcome.studyTips.map((tip, idx) => (
                          <li key={idx}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardBody>
              </Card>
            </>
          ) : (
            <div className={styles.chapterContent}>
              {/* Context & Prerequisites */}
              {activeChapter.contextAndPrerequisites && (
                <Card>
                  <CardHeader title="Context & Prerequisites" meta="Before You Start" />
                  <CardBody>
                    <ul className={styles.bulletList}>
                      {activeChapter.contextAndPrerequisites.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>
              )}

              {/* Real-World Analogy */}
              {activeChapter.realWorldAnalogy && (
                <Card>
                  <CardHeader title="Real-World Analogy" meta="Understanding" />
                  <CardBody>
                    <p className={styles.analogyText}>{activeChapter.realWorldAnalogy}</p>
                  </CardBody>
                </Card>
              )}

              {/* Common Misconceptions */}
              {activeChapter.commonMisconceptions && (
                <Card>
                  <CardHeader title="Common Misconceptions" meta="Watch Out" />
                  <CardBody>
                    <ul className={styles.bulletList}>
                      {activeChapter.commonMisconceptions.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>
              )}

              {/* Exam Tips */}
              {activeChapter.examTips && (
                <Card>
                  <CardHeader title="Exam Tips" meta="High Yield" />
                  <CardBody>
                    <ul className={styles.bulletList}>
                      {activeChapter.examTips.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>
              )}

              {/* Key Takeaway */}
              {activeChapter.keyTakeaway && (
                <Card>
                  <CardHeader title="Key Takeaway" meta="Remember This" />
                  <CardBody>
                    <div className={styles.keyTakeawayBox}>
                      <p>{activeChapter.keyTakeaway}</p>
                    </div>
                  </CardBody>
                </Card>
              )}

              {/* Further Connections */}
              {activeChapter.furtherConnections && (
                <Card>
                  <CardHeader title="Further Connections" meta="How It Fits" />
                  <CardBody>
                    <ul className={styles.bulletList}>
                      {activeChapter.furtherConnections.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>
              )}

              {/* Chapter Overview / Objectives */}
              <Card>
                <CardHeader title="Chapter Overview" subtitle="Key Learning Objectives" meta="Objectives" />
                <CardBody>
                  <ul className={styles.bulletList}>
                    {activeChapter.objectives?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </CardBody>
              </Card>

              {/* Key Concepts */}
              <Card>
                <CardHeader title="Key Concepts & Explanations" meta="Core" />
                <CardBody>
                  <ul className={styles.bulletList}>
                    {activeChapter.keyConcepts?.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  {activeChapter.content && (
                    <div className={styles.contentText}>
                      <p>{activeChapter.content}</p>
                    </div>
                  )}
                </CardBody>
              </Card>

              {/* Additional Key Points */}
              {activeChapter.additionalKeyPoints && (
                <Card>
                  <CardHeader title="Additional Key Points" meta="Deep Dive" />
                  <CardBody>
                    <ul className={styles.bulletList}>
                      {activeChapter.additionalKeyPoints.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>
              )}

              {/* Comparison Table (Chapter 4 specific) */}
              {activeChapter.comparisonTable && (
                <ComparisonTable
                  title={activeChapter.comparisonTable.title}
                  subtitle={activeChapter.comparisonTable.subtitle}
                  badge={activeChapter.comparisonTable.badge}
                  headers={activeChapter.comparisonTable.headers}
                  rows={activeChapter.comparisonTable.rows}
                />
              )}

              {/* Practice Exercises */}
              <Card>
                <CardHeader title="Exam Practice Questions" subtitle="Active Recall" meta="Revision" />
                <CardBody>
                  {activeChapter.exercises?.map((ex, index) => (
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
                  {(!activeChapter.exercises || activeChapter.exercises.length === 0) && (
                    <p className={styles.noExercises}>No practice questions available for this chapter yet.</p>
                  )}
                </CardBody>
              </Card>
            </div>
          )}
        </PageShell>
      </main>
    </div>
  );
}
