"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import { links } from "@/utils/links";
import AnimatedLink from "./AnimatedLink";

const containerVars = {
  initial: {
  transition: {
  staggerChildren: 0.09,
  staggerDirection: -1,
  },
},
  open: {
  transition: {
  delayChildren: 0.2,
  staggerChildren: 0.07,
  staggerDirection: 1,
  },
  },
};

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

const menuVars = {
  initial: {
  scaleY: 0,
  },
  animate: {
  scaleY: 1,
  transition: {
    duration: 0.5,
    ease: [0.12, 0, 0.39, 0],
  },
},
  exit: {
  scaleY: 0,
  transition: {
    delay: 0.5,
    duration: 0.2,
    ease: [0.22, 1, 0.36, 1],
  },
  }
};

export const Menu = () => {

  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<number | null>(null);

  return (
  <>
    <div className="burgerHeader ">
      <div onClick={() => {setOpen(!open)}} className={` ${open ? "borderActive" : "burgerButton"} `}>
        <div className={`burger ${open ? "burgerActive" : ""}`} />
      </div>
    </div>
    <AnimatePresence>
    {open && (
    <motion.div
      variants={menuVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed right-0 top-0 w-full h-screen origin-top bg-gradient-to-r from-slate-900/75 to-slate-800/75 p-10 z-40  backdrop-blur-xl"
    >

      <div className="flex h-full flex-col ">
        <motion.div
        variants={containerVars}
        initial="initial"
        animate="open"
        exit="initial"
        className="flex flex-col gap-y-6 md:gap-y-5 h-full justify-center items-start sm:mx-auto"
        >
        {links.map(({href, id, name}) => {
          return (
          <motion.div
            key={id}
            variants={mobileLinkVars}
            whileTap={{scale:0.95}}
            className="group uppercase text-slate-300"
            onClick={() => setOpen(false)}
            onHoverStart={() => setActiveLink(activeLink === id ? null : id)}
            onHoverEnd={() => setActiveLink(null)}
            >
              <Link key={id} href={href} className="flex flex-col gap-x-1 my-1">
                <AnimatedLink title={name} textStyles="text-2xl lg:text-4xl" />
              </Link>
          </motion.div>
        );
      })}
        </motion.div>
      </div>
    </motion.div>
    )}
    </AnimatePresence>
  </>
)
}