import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import cl from "./Gallery.module.css";

export default function Gallery({ pets, page, setPage }) {
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection) => {
    setPage(wrap(0, pets.length, page + newDirection));
    setDirection(newDirection);
  };

  /*useEffect(() => {
    document.addEventListener("keydown", pressFn)
    return () => document.removeEventListener("keydown", pressFn)
  }, [])

  const pressFn = (e) => {
    if(e.keyCode === 39) {
      paginate(1)
      console.log("next")
    }
    if(e.keyCode === 37) {
      paginate(-1)
      console.log("prev")
    }
  }*/

  /*useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if(e.keyCode === 39) {
        paginate(1)
        console.log("next")
      }
    })
  }, [])*/

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className={cl.img}
          key={page}
          src={pets && pets[page].path}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div className={cl.next} onClick={() => paginate(1)}>
        {"‣"}
      </div>
      <div className={cl.prev} onClick={() => paginate(-1)}>
        {"‣"}
      </div>
    </>
  );
}

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};
