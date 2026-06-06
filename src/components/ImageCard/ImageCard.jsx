// ImageCard.jsx

import { useState } from 'react';
import { Card, CardBody } from '../Card/Card.jsx';
import styles from './ImageCard.module.css';

export default function ImageCard({ title, description, imageSrc, imageAlt, stepNumber }) {
  const [imgError, setImgError] = useState(false);
  
  const baseUrl = import.meta.env.BASE_URL;
  // Remove trailing slash from baseUrl if it exists
  const cleanBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  // Remove leading slash from imageSrc
  const cleanSrc = imageSrc.startsWith('/') ? imageSrc.slice(1) : imageSrc;
  const fullUrl = `${cleanBase}/${cleanSrc}`;

  console.log('Base URL:', baseUrl);
  console.log('Full URL:', fullUrl);

  return (
    <Card>
      <CardBody>
        <div className={styles.imageCard}>
          {stepNumber && <div className={styles.stepBadge}>Step {stepNumber}</div>}
          {title && <h3 className={styles.imageTitle}>{title}</h3>}
          {description && <p className={styles.imageDescription}>{description}</p>}
          <div className={styles.imageWrapper}>
            {!imgError ? (
              <img 
                src={fullUrl} 
                alt={imageAlt || title} 
                className={styles.image}
                onError={() => setImgError(true)}
              />
            ) : (
              <div className={styles.imageFallback}>
                <span>📷</span>
                <p>Image not found: {cleanSrc}</p>
                <small>Tried to load from: {fullUrl}</small>
              </div>
            )}
          </div>
        </div>
      </CardBody>
    </Card>
  );
}