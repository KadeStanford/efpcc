import React from "react";
import styles from "./EastFelicianaParishChamber.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <a href="tel:+1234567890" className={styles.footerLink}>
          Phone: +1 (234) 567-890
        </a>
        <a href="mailto:info@example.com" className={styles.footerLink}>
          Email: info@example.com
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          Facebook
        </a>
      </div>
    </footer>
  );
}

export default Footer;
