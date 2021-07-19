import React from "react";
import styles from "./Review.module.scss";

const Review = ({ reviewInfo }) => {
  const { text, name } = reviewInfo;

  return (
    <div className={styles.review}>
      <div className={styles.quotation_one}></div>
      <p>{text}</p>
      <div className={styles.quote_container}>
        <div className={styles.quotation_two}></div>
      </div>

      <h3>{name}</h3>
    </div>
  );
};

export default Review;
