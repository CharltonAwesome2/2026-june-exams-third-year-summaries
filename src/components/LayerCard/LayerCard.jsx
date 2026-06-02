// LayerCard.jsx

import { Card, CardHeader, CardBody } from '@components/Card/Card.jsx';
import styles from './LayerCard.module.css';

export default function LayerCard({ title, subtitle, badge, layers }) {
  return (
    <Card>
      <CardHeader title={title} subtitle={subtitle} meta={badge} />
      <CardBody>
        <div className={styles.layersContainer}>
          {layers.map((layer, idx) => (
            <div key={idx} className={styles.layerItem}>
              <div className={styles.layerHeader}>
                <span className={styles.layerName}>{layer.layer}</span>
                <span className={styles.layerArrow}>→</span>
              </div>
              <ul className={styles.layerResponsibilities}>
                {layer.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}