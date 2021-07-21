import React, { useState, useRef, useEffect } from 'react'
import styles from "./Card.module.scss";

import { useInView } from 'react-intersection-observer';

import cx from "classnames";

const Card = ({ cardInfo }) => {
  const { icon, heading, caption } = cardInfo;

  const { ref, inView, entry } = useInView({
    /* Optional options */
    // rootMargin: "150px",
    threshold: 0,
  });

  return (
    <div className={cx(styles.card, inView && styles.card_animate)} ref={ref}>
      <img src={icon} alt="services" />
      <h3>{heading}</h3>
      <p>{caption}</p>
    </div>
  )
}

export default Card
