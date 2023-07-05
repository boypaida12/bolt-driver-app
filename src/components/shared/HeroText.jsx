/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

function HeroText({ heroHeading, heroParagraph, boldParagraph }) {
  return (
    <motion.div className="text-after" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 1}}>
      <h1 className="fw-bold">
        {heroHeading}
      </h1>
      <p className="fs-5">
        {heroParagraph}
        <span className="fw-bold"> {boldParagraph} </span>
      </p>
    </motion.div>
  );
}

export default HeroText;
