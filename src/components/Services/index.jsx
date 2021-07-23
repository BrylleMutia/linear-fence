import React, { useState, useEffect } from "react";
import styles from "./Services.module.scss";
import axios from "axios";

import Img1 from "./images/Success.png";
import Img2 from "./images/Reviews.png";
import Img3 from "./images/Payment.png";
import ServiceCard from "./ServiceCard";

const serviceImgs = [Img1, Img2, Img3];

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("/services")
      .then((response) => {
        // map first to attach icons for each service from API
        setServices(
          response.data.map((service) => {
            return { ...service, icon: serviceImgs.filter((img, index) => service.id === index + 1) };
          })
        );
      })
      .catch((err) => alert(`Can't fetch website data. Error: ${err.response.data}`));
  }, []);

  return (
    <div className={styles.services_container} id="services">
      <div className={styles.services}>
        {services.map((detail, index) => (
          <ServiceCard key={index} cardInfo={detail} />
        ))}
      </div>
    </div>
  );
};

export default Services;
