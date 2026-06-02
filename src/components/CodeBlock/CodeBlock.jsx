// src/components/CodeBlock/CodeBlock.jsx

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from '@hooks/useTheme';
import { Card, CardBody } from '@components/Card/Card.jsx';
import styles from './CodeBlock.module.css';

export default function CodeBlock({ title, description, language = 'java', code, meta }) {
  const { theme } = useTheme();
  const codeStyle = theme === 'dark' ? vscDarkPlus : vs;

  // Don't render if no code
  if (!code) return null;

  return (
    <Card>
      <div className={styles.codeHeader}>
        <div>
          {title && <h3 className={styles.codeTitle}>{title}</h3>}
          {description && <p className={styles.codeDescription}>{description}</p>}
        </div>
        {meta && <span className={styles.codeMeta}>{meta}</span>}
      </div>
      <CardBody>
        <SyntaxHighlighter
          language={language}
          style={codeStyle}
          showLineNumbers
          wrapLines
          customStyle={{ margin: 0, borderRadius: '8px', fontSize: '0.85rem' }}
        >
          {code.trim()}
        </SyntaxHighlighter>
      </CardBody>
    </Card>
  );
}