import cl from "./FramerSelect.module.css"
import { useState } from "react";
import { motion } from "framer-motion";

export default function FramerSelect({label, type, setType}) {
  const [isOpen, setIsOpen] = useState(false);

  const handler = (typeAnimal) => {
    setIsOpen(false)
    setType(typeAnimal)
  }

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className={cl.menu}
    >
      <div className={cl.label}>{label}</div>
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={(e) => setIsOpen(!isOpen)}
      >
        {type}
        <motion.div
          variants={{
            open: { rotate: 180, y: -3 },
            closed: { rotate: 0, y: 1 }
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.4,
              delayChildren: 0.3,
              staggerChildren: 0.05
            }
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3
            }
          }
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none", display: isOpen ? "flex" : "none" }}
      >
        {
          animalType.map(anim => 
            <motion.li onClick={() => handler(anim[0])} key={anim} variants={itemVariants}>
              <span>{anim[0]}</span>
              <span style={{color: "#142012"}}>{anim[1]}</span>
            </motion.li>            
          )
        }
      </motion.ul>
    </motion.nav>
  );
}


const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};


const animalType = [
  ["Cat", "Кот"], 
  ["Dog", "Собака"], 
  ["Rebbit", "Кролик"], 
  ["Guinea pig", "Морская свинка"],
  ["Hamster", "Хомяк"],
  ["Rat", "Крыса"],
  ["Parrot", "Попугай"],
  ["Aquarium fish", "Аквариумные рыбки"],
  ["Turtle", "Черепаха"],
  ["Chinchillas", "Шиншиллы "],
  ["Snake", "Змея "],
  ["Duck", "Утка "],
  ["Other type", "Другой вид"],
]