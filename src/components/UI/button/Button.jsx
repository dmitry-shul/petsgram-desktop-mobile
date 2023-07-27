import cl from "./Button.module.css"

export default function Button({children, type, ...props}) {

  const rootClass = type === "fill" ? cl.buttonFill : cl.buttonBorder;

  return (
    <button {...props} className={rootClass} >{children}</button>
  );
}