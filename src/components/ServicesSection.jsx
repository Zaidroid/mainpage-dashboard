import React from 'react';
import styles from './ServicesSection.module.css';

const servicesData = [
  { id: 1, name: 'Home Assistant', baseURL: 'home.zaidlab.xyz', status: 'Online', icon: '🏠' },
  { id: 2, name: 'Immich', baseURL: 'photos.zaidlab.xyz', status: 'Offline', icon: '📸' },
  { id: 3, name: 'Portainer', baseURL: 'portainer.zaidlab.xyz', status: 'Online', icon: '🐳' },
  { id: 4, name: 'Ollama', baseURL: 'chat.zaidlab.xyz', status: 'Online', icon: '🦙' },
];

function ServicesSection() {
  return (
    <div className={styles.container}>
      <h2>My Services</h2>
      <div className={styles.servicesList}>
        {servicesData.map((service) => (
          <div key={service.id} className={styles.serviceItem}>
            <div className={styles.icon}>{service.icon}</div>
            <div className={styles.name}>{service.name}</div>
            <div className={styles.baseURL}>Base URL: {service.baseURL}</div>
            <div className={styles.status}>Status: {service.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;
