import React from "react";
import styles from "./Home.module.scss";

import Hero from "../components/Hero";
import Services from "../components/Services";
import Offers from "../components/Offers";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Offers />
      <Reviews />
    </main>
  );
};

export default Home;
