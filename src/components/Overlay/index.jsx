import React from 'react'
import styles from "./Overlay.module.scss";


const Overlay = ({ label, fontSize = "1rem", children }) => {
  return (
    <div>
      <div className={styles.overlay_container}>
        {children}
        <div className={styles.overlay}>
          <div className={styles.overlay_text} style={{ fontSize }}>{label}</div>
        </div>
      </div>
    </div>
  )
}

export default Overlay
