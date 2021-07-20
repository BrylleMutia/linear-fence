import React from 'react';
import styles from "./SectionTitle.module.scss";

const SectionTitle = ({ title, ...props }) => {
  return <h3 className={styles.section_title} {...props}>{title}</h3>
}

export default SectionTitle
