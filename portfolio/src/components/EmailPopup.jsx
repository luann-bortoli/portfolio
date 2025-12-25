import { useEffect, useState } from "react";
import styles from '../styles/EmailPopup.module.css';

export default function EmailPopup({ show, timeout = 3000, onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false);
        onClose && onClose();
      }, timeout);

      return () => clearTimeout(timer);
    }
  }, [show, timeout, onClose]);

  return (
    <div className={`${styles.container} ${visible ? styles.show : styles.hide}`}>
      <p>E-mail copiado para o clipboard!</p>
    </div>
  );
}
