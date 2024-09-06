import React from "react";
import styles from "./EastFelicianaParishChamber.module.css";

function ContentSection({ text, imageSrc, imageAlt, reverse }) {
  const textColumnClass = reverse ? styles.secondTextColumn : styles.textColumn;
  const imageColumnClass = reverse
    ? styles.secondImageColumn
    : styles.imageColumn;
  const contentClass = reverse
    ? styles.secondContentSection
    : styles.contentSection;
  const rowClass = reverse ? styles.secondContentRow : styles.contentRow;
  const textClass = reverse ? styles.visionStatement : styles.missionStatement;

  return (
    <section className={contentClass}>
      <div className={rowClass}>
        {reverse && (
          <div className={imageColumnClass}>
            <img
              loading="lazy"
              src={imageSrc}
              className={styles.contentImage}
              alt={imageAlt}
            />
          </div>
        )}
        <div className={textColumnClass}>
          <p className={textClass}>{text}</p>
        </div>
        {!reverse && (
          <div className={imageColumnClass}>
            <img
              loading="lazy"
              src={imageSrc}
              className={styles.contentImage}
              alt={imageAlt}
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default ContentSection;
