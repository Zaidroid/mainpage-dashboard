import React from 'react';
import styles from './AppsSection.module.css';

const appsData = [
  { id: 1, name: 'Full Stack Builder', url: 'https://bolt.zaidlab.xyz', icon: '🛠️' },
  { id: 2, name: 'Local AI Chatbot', url: 'https://chat.zaidlab.xyz', icon: '💬' },
  { id: 3, name: 'Time Travel Simulator', url: 'https://timetravel.zaidlab.xyz', icon: '⏳' },
  { id: 4, name: 'AI Media Generator', url: 'https://generate.zaidlab.xyz', icon: '🖼️' },
];

function AppsSection() {
  return (
    <div className={styles.container}>
      <h2>My Apps</h2>
      <div className={styles.appsList}>
        {appsData.map((app) => (
          <a key={app.id} href={app.url} className={styles.appItem}>
            <div className={styles.icon}>{app.icon}</div>
            <div className={styles.name}>{app.name}</div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default AppsSection;
