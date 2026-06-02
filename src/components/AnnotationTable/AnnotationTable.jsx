// AnnotationTable.jsx

import { Card, CardHeader, CardBody } from '@components/Card/Card.jsx';
import styles from './AnnotationTable.module.css';

export default function AnnotationTable({ title, subtitle, badge, annotations }) {
  return (
    <Card>
      <CardHeader title={title} subtitle={subtitle} meta={badge} />
      <CardBody>
        <div className={styles.tableWrapper}>
          <table className={styles.annotationTable}>
            <thead>
              <tr>
                <th>Annotation</th>
                <th>Purpose</th>
                <th>Example Usage</th>
              </tr>
            </thead>
            <tbody>
              {annotations.map((ann, idx) => (
                <tr key={idx}>
                  <td className={styles.annotationName}>{ann.annotation}</td>
                  <td>{ann.purpose}</td>
                  <td className={styles.annotationExample}>
                    <code>{ann.example}</code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
}