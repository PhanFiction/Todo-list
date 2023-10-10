import React, { useState } from 'react';
import styles from './Alert.module.css';

const Alert = ({ message, type, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    isOpen && (
      <div className={styles['alert-container']}>
        <label className={styles['alert']}>
          <input
            type="checkbox"
            className={styles.alertCheckbox}
            autoComplete="off"
            onChange={handleClose}
          />
          <div className={`${styles.alert} ${styles.error}`}>
            <span className={styles.alertClose} onClick={handleClose}>
              X
            </span>
            <span className={styles.alertText}>{message}</span>
          </div>
        </label>
      </div>
    )
  );
};

export default Alert;
