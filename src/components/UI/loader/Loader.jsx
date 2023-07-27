import cl from "./Loader.module.css"
import loader from "../../../assets/icons/loader.svg"

export default function Loader() {
  return (
    <div className={cl.loader}>
      <img className={cl.img} src={loader} alt="loader"/>
      <span className={cl.title}>Loading...</span>
    </div>
  );
}