import React from "react";
import styles from "./Reviews.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
import SectionTitle from "../SectionTitle";
import Review from "./Review";


const clientReviews = [
  {
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, voluptatum? Accusantium sit maxime sunt eligendi vero beatae, quasi nisi dicta dignissimos corporis in odio numquam, alias atque ea porro rerum.",
    name: "John Doe"
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, itaque vel dignissimos necessitatibus sed molestias, perspiciatis debitis eum eaque velit enim mollitia voluptatum expedita incidunt esse repudiandae officiis. Recusandae, porro.",
    name: "Mark Cruz"
  },
  {
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex repudiandae ea consectetur dolore quis, maiores ipsam quae natus vel nemo eveniet, culpa assumenda ratione mollitia. Possimus, dolores exercitationem.",
    name: "Jane De Leon"
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit, eligendi repudiandae ea illo alias praesentium repellat fugit a quod.",
    name: "Arnold Schwarzenegger"
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste asperiores odio voluptate ratione laudantium consectetur dolorem eligendi sit, animi earum? Magni asperiores dicta harum tempore dolorum, expedita optio dolores veritatis nihil quas adipisci quaerat labore.",
    name: "Katniss Everdeen"
  }
]

const Reviews = () => {
  return (
    <div className={styles.reviews_container}>
      <div className={styles.container}>
        <SectionTitle title="CLIENT REVIEWS" />
      </div>
      <div className={styles.reviews}>
        <Carousel autoPlay infiniteLoop interval={5000}>
          {clientReviews.map((reviewDetail, index) => (
            <Review key={index} reviewInfo={reviewDetail} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;
