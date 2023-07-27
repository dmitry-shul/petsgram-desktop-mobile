import cl from "./Select.module.css"

export default function Select({label}) {
  return (
    <div>
      <label className={cl.label} htmlFor="select">{label}</label>
      <select className={cl.select} id="select">
        <option value="111">111111111</option>
        <option value="222">222222222</option>
        <option value="333">333333333</option>
      </select>
    </div>
  );
}

const animalType = ["Cat", "Dog", "Rebbit", "Guinea pig"]

/*
<select className="header__select" onChange={(e) => handler(e.target.value)}>
          <option value="">Counter</option>
          <option value="modal">Modal</option>
          <option value="quiz">Quiz</option>
          <option value="invitation">Invitation</option>
          <option value="exchange_rates">Exchange rates</option>
          <option value="collection_photo">Collection photo</option>
        </select>
*/