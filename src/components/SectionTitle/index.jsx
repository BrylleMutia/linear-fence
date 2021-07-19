import React from 'react';
import styles from "./SectionTitle.module.scss";

const SectionTitle = ({ title }) => {
  return <h3 className={styles.section_title}>{title}</h3>
}

export default SectionTitle
