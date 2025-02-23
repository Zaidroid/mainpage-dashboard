import React from 'react';
import AppsSection from './components/AppsSection';
import ServicesSection from './components/ServicesSection';
import MonitoringSection from './components/MonitoringSection';
import PrintersSection from './components/PrintersSection';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Zaid Lab</h1>
      <AppsSection />
      <ServicesSection />
      <PrintersSection />
      <MonitoringSection />
    </div>
  );
}

export default App;
