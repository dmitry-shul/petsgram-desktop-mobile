import { motion } from "framer-motion";

export default function PetCard({ pet, ...props }) {
  return (
    <motion.div
      {...props}
      variants={cardAnimation}
      initial="hidden"
      animate="visible"
      className="petCard"
    >
      <div className="petCard__info">
        <span>{pet.type}</span>
        <span>{pet.owner}'s</span>
      </div>

      <div className="petCard__name">{pet.name}</div>

      <div className="petCard__image">
        <img className="petCard__img" src={pet.mainPhoto.path} alt={pet.name} />
      </div>
    </motion.div>
  );
}

const cardAnimation = {
  hidden: {
    y: 50,
    opacity: 0
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.06, bound: 0.6 }
  })
};
