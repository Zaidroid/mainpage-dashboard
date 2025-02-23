import React from 'react';
import styles from './ServersSection.module.css';

const serversData = [
  { id: 1, name: 'Server 1', status: 'Online', icon: '🟢' },
  { id: 2, name: 'Server 2', status: 'Offline', icon: '🔴' },
  { id: 3, name: 'Server 3', status: 'Online', icon: '🟢' },
  { id: 4, name: 'Server 4', status: 'Maintenance', icon: '🟡' },
];

function ServersSection() {
  return (
    <div className={styles.container}>
      <h2>My Servers</h2>
      <div className={styles.serversList}>
        {serversData.map((server) => (
          <div key={server.id} className={styles.serverItem}>
            <div className={styles.icon}>{server.icon}</div>
            <div className={styles.name}>{server.name}</div>
            <div className={styles.status}>Status: {server.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServersSection;
