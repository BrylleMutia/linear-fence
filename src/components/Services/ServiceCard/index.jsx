import React, { useState, useRef, useEffect } from 'react'
import styles from "./Card.module.scss";
import axios from "axios";

import { useInView } from 'react-intersection-observer';

import cx from "classnames";

const Card = ({ cardInfo }) => {
  const { title, subtitle, icon } = cardInfo;

  const { ref, inView, entry } = useInView({
    /* Optional options */
    // rootMargin: "150px",
    threshold: 0,
  });

  return (
    <div className={cx(styles.card, inView && styles.card_animate)} ref={ref}>
      <img src={icon} alt="services" />
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  )
}

export default Card
