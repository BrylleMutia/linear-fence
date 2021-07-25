import React, { useEffect, useState } from "react";
import styles from "./Reviews.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
import SectionTitle from "../SectionTitle";
import Review from "./Review";
import axios from "axios";
import { Link } from "react-router-dom";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("/reviews")
      .then((response) => {
        setReviews(response.data);
      })
      .catch((err) => alert(`Can't fetch website data. Error: ${err.response.data}`));
  }, []);

  return (
    <div className={styles.reviews_container} id="reviews">
      <div className={styles.container}>
        <SectionTitle title="CLIENT REVIEWS" />
      </div>
      <div className={styles.reviews}>
        <Carousel autoPlay infiniteLoop interval={5000} showThumbs={false}>
          {reviews.map((reviewDetail, index) => (
            <Review key={index} reviewInfo={reviewDetail} />
          ))}
        </Carousel>
      </div>
      <div className={styles.btn_container}>
        <Link to="/feedback" className={styles.button_outlined_secondary}>Leave a review</Link>
      </div>
    </div>
  );
};

export default Reviews;
