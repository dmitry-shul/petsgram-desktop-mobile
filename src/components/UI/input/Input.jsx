import cl from "./Input.module.css"

export default function Input({type, label, ...props}) {
  return (
    <div>
      <label className={cl.label}>
        {label}
        <input {...props} type={type} className={cl.input} />
        <p className={cl.message}>{}</p>
      </label>
    </div>
  );
}