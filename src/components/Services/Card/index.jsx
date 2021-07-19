import React from 'react'
import styles from "./Card.module.scss";

const Card = ({ cardInfo }) => {
  const { icon, heading, caption } = cardInfo;

  return (
    <div className={styles.card}>
      <img src={icon} alt="services" />
      <h3>{heading}</h3>
      <p>{caption}</p>
    </div>
  )
}

export default Card
