import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedWord } from "./AnimatedLetter";
import { letterAnimation, letterAnimationTwo } from "@/utils/letterAnimations";

export default function AnimatedLink({ title, textStyles } : {title:string, textStyles:string}) {
    const [isHovered, setHovered] = useState(false);

    return (
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative overflow-hidden cursor-pointer"
      >
        <AnimatedWord title={title} animation={letterAnimation} isHovered={isHovered} textStyles={textStyles} />
        <div className="absolute top-0">
          <AnimatedWord title={title} animation={letterAnimationTwo} isHovered={isHovered} textStyles={textStyles} />
        </div>
      </motion.div>
    );
  }