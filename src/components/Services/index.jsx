import React from 'react';
import styles from "./Services.module.scss";

import PaymentIcon from "./images/Payment.png";
import ReviewIcon from "./images/Reviews.png";
import SuccessIcon from "./images/Success.png";
import ServiceCard from './ServiceCard';


const cardDetails = [
  {
    icon: SuccessIcon,
    heading: "Lorem ipsum dolor sit amet",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
  },
  {
    icon: ReviewIcon,
    heading: "Lorem ipsum dolor sit amet",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
  },
  {
    icon: PaymentIcon,
    heading: "Lorem ipsum dolor sit amet",
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
  },
]

const Services = () => {
  return (
    <div className={styles.services}>
      {cardDetails.map((detail, index) => (
        <ServiceCard key={index} cardInfo={detail} />
      ))}
    </div>
  )
}

export default Services
