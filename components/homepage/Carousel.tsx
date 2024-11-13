"use client";

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Data = ['/products/1.webp', '/products/2.webp', '/products/3.webp'];

export const Carousel = () => {
 const [FlowDirection, setFlowDirection] = useState(true);
 const [CenterId, setCenterId] = useState(0);
 const [LeftId, setLeftId] = useState(Data.length - 1);
 const [RightId, setRightId] = useState(1);
 const [screenWidth, setscreenWidth] = useState<number>(0);

 useEffect(() => {
  if(typeof window !== "undefined" ){
    setscreenWidth(window.screen.width);
  }
 }, []); 

 const nextBtn = () => {
  if (LeftId === Data.length - 1) {
   setLeftId(0)
  } else {
   setLeftId(LeftId + 1)
  }
  if (CenterId === Data.length - 1) {
   setCenterId(0)
  } else {
   setCenterId(CenterId + 1)
  }

  if (RightId === Data.length - 1) {
   setRightId(0)
  } else {
   setRightId(RightId + 1)
  }
  setFlowDirection(true)
 }
 
//  const prevBtn = () => {
//   setFlowDirection(false)
//   if (LeftId === 0) {
//    setLeftId(Data.length - 1)
//   } else {
//    setLeftId(LeftId - 1)
//   }
//   if (CenterId === 0) {
//    setCenterId(Data.length - 1)
//   } else {
//    setCenterId(CenterId - 1)
//   }
//   if (RightId === 0) {
//    setRightId(Data.length - 1)
//   } else {
//    setRightId(RightId - 1)
//   }
//  };    
    
    useEffect(() => {
    const timerId = setInterval(() => nextBtn(), 5000);
     return () => {
       clearInterval(timerId)
     };
   });

 const variants = {
  center: {
   x: '0rem',
   y: screenWidth > 1000 ? "3rem" : "1.4rem",
   opacity: 1,
   scale: screenWidth > 1000 ? 1 : 0.7,
   zIndex: '5',
   filter: "brightness(100%)",
   backgroundImage: 'url(' + Data[CenterId] + ')',
   transition: {
    type: 'spring',
    duration: 1,
   },
  },
  left: {
   x: screenWidth > 1000 ? "-6.5rem" : "-5rem",
   y: '-5rem',
   opacity: 1,
   filter: "brightness(80%)",
   scale: screenWidth > 1000 ? 0.6 : 0.3,
   backgroundImage: 'url(' + Data[LeftId] + ')',
   zIndex: '4',
   boxShadow: 'unset',
   transition: {
    type: 'spring',
    duration: 1,
   },
  },
  right: {
   backgroundImage: 'url(' + Data[RightId] + ')',
   x: screenWidth > 1000 ? "6.5rem" : "5rem",
   y: '-3rem',
   opacity: 1,
   filter: "brightness(80%)",
   scale: screenWidth > 1000 ? 0.8 : 0.5,
   boxShadow: 'unset',
   zIndex: '3',
   transition: {
    type: 'spring',
    duration: 1,
   },
  },
  rightHidden: {
   x: '8rem',
   scale: 0,
   opacity: 0
  },
  leftHidden: {
   x: '-8rem',
   scale: 0,
   opacity: 0
  },
 }
 return (  
  <motion.div className="herocarousel-wrapper">
   <motion.div className="herocarousel-content">
    <AnimatePresence initial={false}>
     <motion.div
      key={LeftId}
      variants={variants}
      initial={FlowDirection ? 'center' : 'leftHidden'}
      animate="left"
      exit={'leftHidden'}
      className="herocarousel-item"
     ></motion.div>
     <motion.div
      variants={variants}
      key={CenterId}
      initial={FlowDirection ? 'right' : 'left'}
      animate="center"
      className="herocarousel-item"
     ></motion.div>
     <motion.div
      key={RightId}
      variants={variants}
      initial={FlowDirection ? 'rightHidden' : 'center'}
      animate="right"
      exit={'rightHidden'}
      className="herocarousel-item"
     ></motion.div>
    </AnimatePresence>
   </motion.div>
  </motion.div>
 )
}