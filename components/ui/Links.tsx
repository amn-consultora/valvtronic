import { Dispatch, SetStateAction, FC } from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import { links } from '@/utils/links';

const variants = {
  open: {
    transition: {
      staggerChildren : 0.1
    }
  },
  closed: {
    transition: {
      staggerChildren : 0.05,
      staggerDirection: -1
    }
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1
  },
  closed: {
    y: 50,
    opacity: 0
  },
};

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>
}

export const Links:FC<Props> = ({setOpen}) => {

  const handleClick = () => {
    setTimeout(() => {
      setOpen(false)
    }, 500);
  }

  return (
    <motion.div 
      className="w-full h-full flex flex-col items-center justify-center gap-5 relative"
      variants={variants}
    >
        {links.map( ({href, id, name}) => (
            <motion.div
              key={id}
              variants={itemVariants}
              whileHover={{scale: 1.1}}
              whileTap={{scale:0.95}}
              onClick={handleClick}
              >
                <Link href={href} className='flex items-center gap-x-1 uppercase tracking-wider'> {name}</Link>
              </motion.div>
        ) )}
    </motion.div>
  )
}