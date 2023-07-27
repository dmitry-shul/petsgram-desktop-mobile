import cl from "./Modal.module.css"

export default function MyModal({children, visible, setVisible, ...props}) {
  const stykeClasses = [cl.modal];

  if(visible) {
    stykeClasses.push(cl.active);
  }

  return (
    <div className={stykeClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={props.classModal ? props.classModal : cl.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}