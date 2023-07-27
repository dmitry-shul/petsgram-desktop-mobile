import { motion } from "framer-motion";

export default function PageAnimation({children, ...props}) {
  return (
    <motion.div 
      {...props}
      initial="hidden"
      animate="visible"
      variants={formAnimation} 
    >
      {children}
    </motion.div>
  );
}

const formAnimation = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
}