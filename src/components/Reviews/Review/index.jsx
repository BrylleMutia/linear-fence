import React from "react";
import styles from "./Review.module.scss";

const Review = ({ reviewInfo }) => {
  const { client_name, client_review } = reviewInfo;

  return (
    <div className={styles.review}>
      <div className={styles.quotation_one}></div>
      <p>{client_review}</p>
      <div className={styles.quote_container}>
        <div className={styles.quotation_two}></div>
      </div>

      <h3>{client_name}</h3>
    </div>
  );
};

export default Review;
