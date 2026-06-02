// ComponentTable.jsx

import { Card, CardHeader, CardBody } from '@components/Card/Card.jsx';
import styles from './ComponentTable.module.css';

export default function ComponentTable({ title, subtitle, badge, components }) {
  return (
    <Card>
      <CardHeader title={title} subtitle={subtitle} meta={badge} />
      <CardBody>
        <div className={styles.tableWrapper}>
          <table className={styles.componentTable}>
            <thead>
              <tr>
                <th>Component Type</th>
                <th>Purpose</th>
                <th>Examples</th>
              </tr>
            </thead>
            <tbody>
              {components.map((comp, idx) => (
                <tr key={idx}>
                  <td className={styles.componentName}>{comp.name}</td>
                  <td>{comp.description}</td>
                  <td className={styles.componentExamples}>{comp.examples}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
}