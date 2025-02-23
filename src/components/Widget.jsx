import React from 'react';
import styles from './Widget.module.css';

function Widget({ name, url, icon }) {
  return (
    <a href={url} className={styles.widget}>
      <div className={styles.icon}>{icon}</div>
      <h2 className={styles.name}>{name}</h2>
    </a>
  );
}

export default Widget;
