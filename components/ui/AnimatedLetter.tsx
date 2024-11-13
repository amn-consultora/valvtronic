"use client";

import { titleAnimation } from "@/utils/letterAnimations";
import { motion } from "framer-motion";

const AnimatedLetter = ({ character, animation, textStyles }:{ character:string, animation:any, textStyles:string }) => {
    return (
      <motion.span
        variants={animation}
        className={`relative inline-block whitespace-nowrap font-bold capitalize ${textStyles}`}
      >
        {character}
      </motion.span>
    );
  };

  export const AnimatedWord = ({ title, animation, isHovered, textStyles } : {title:string, animation:any, isHovered:any, textStyles:string }) => {
    return (
      <motion.span
        variants={titleAnimation}
        initial="rest"
        animate={isHovered ? "hover" : "rest"}
        className="whitespace-nowrap relative"
      >
        {title
          .split("")
          .map((character, i) =>
            character === " " ? (
              <span key={i}>&nbsp;</span>
            ) : (
              <AnimatedLetter key={i} character={character} animation={animation} textStyles={textStyles} />
            )
          )}
      </motion.span>
    );
  };