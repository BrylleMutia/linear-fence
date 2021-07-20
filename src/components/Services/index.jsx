import React from 'react';
import styles from "./Services.module.scss";

import PaymentIcon from "./images/Payment.png";
import ReviewIcon from "./images/Reviews.png";
import SuccessIcon from "./images/Success.png";
import ServiceCard from './ServiceCard';


const cardDetails = [
  {
    icon: SuccessIcon,
    heading: "Quality Services",
    caption: "We offer quality workmanship that will stand the test of time in maintaining functionality and appearance for years.",
  },
  {
    icon: ReviewIcon,
    heading: "Loved by clients",
    caption: "We are dedicated to provide excellent service for all of our customers.",
  },
  {
    icon: PaymentIcon,
    heading: "Reasonable pricing",
    caption: "We offer cost-effective options using high quality materials. ",
  },
]

const Services = () => {
  return (
    <div className={styles.services_container} id="services">
      <div className={styles.services}>

      {cardDetails.map((detail, index) => (
        <ServiceCard key={index} cardInfo={detail} />
        ))}
        </div>
    </div>
  )
}

export default Services
