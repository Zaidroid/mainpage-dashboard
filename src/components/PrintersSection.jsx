import React from 'react';
import styles from './PrintersSection.module.css';

const printersData = [
  {
    id: 1,
    name: 'S1 Printer',
    url: '192.168.2.159:7125',
    data: {
      status: 'Printing',
      nozzleTemp: 220,
      bedTemp: 60,
      progress: 75,
    },
    icon: '🖨️'
  },
  {
    id: 2,
    name: 'Delta Printer',
    url: '192.168.2.159:7126',
    data: {
      status: 'Idle',
      nozzleTemp: 25,
      bedTemp: 23,
      progress: 0,
    },
    icon: '🖨️'
  },
];

function PrintersSection() {
  return (
    <div className={styles.container}>
      <h2>My 3D Printers</h2>
      <div className={styles.printersList}>
        {printersData.map((printer) => (
          <div key={printer.id} className={styles.printerItem}>
            <div className={styles.icon}>{printer.icon}</div>
            <div className={styles.name}>{printer.name}</div>
            <div className={styles.data}>
              <div>Status: {printer.data.status}</div>
              <div>Nozzle Temp: {printer.data.nozzleTemp}°C</div>
              <div>Bed Temp: {printer.data.bedTemp}°C</div>
              <div>Progress: {printer.data.progress}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PrintersSection;
