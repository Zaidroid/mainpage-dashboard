import React, { useState, useEffect } from 'react';
import styles from './MonitoringSection.module.css';

function MonitoringSection() {
  const [metrics, setMetrics] = useState({
    cpu: 0,
    memory: 0,
    disk: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate changing metrics
      setMetrics({
        cpu: Math.random() * 100,
        memory: Math.random() * 100,
        disk: Math.random() * 100,
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <h2>Monitoring</h2>
      <div className={styles.metrics}>
        <div className={styles.metricItem}>
          <div className={styles.metricName}>CPU</div>
          <div className={styles.metricValue}>{metrics.cpu.toFixed(2)}%</div>
        </div>
        <div className={styles.metricItem}>
          <div className={styles.metricName}>Memory</div>
          <div className={styles.metricValue}>{metrics.memory.toFixed(2)}%</div>
        </div>
        <div className={styles.metricItem}>
          <div className={styles.metricName}>Disk</div>
          <div className={styles.metricValue}>{metrics.disk.toFixed(2)}%</div>
        </div>
      </div>
    </div>
  );
}

export default MonitoringSection;
