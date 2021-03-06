import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "./Navigation";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Footer from "./Footer";
import Line from "./Line";
import Navi from "./Navi";

const Homepage = () => {
  return (
    <div>
      <Navi />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Line />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Footer />
    </div>
  );
};
export default Homepage;
