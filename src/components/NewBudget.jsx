import { useState } from "react";
import Message from "./Message";


const NewBudget = ({budget, setBudget, setIsValidBudget}) => {

  const [message, setMessage] = useState('');
  
  const handleBudget = (e) => {
      e.preventDefault();

      if(!budget || budget < 0) {
            setMessage('No es un presupuesto válido');
            setIsValidBudget(false);
            return;
      } 

      setMessage('');
      setIsValidBudget(true);

  }

  return (
    <div className="contenedor contenedor-presupuesto sombra">
        <form onSubmit={handleBudget} action="" className="formulario">
            <div className="campo">
                <label htmlFor="">Definir Presupuesto</label>
                <input type="number" onChange={ (e) => setBudget(Number(e.target.value))} value={budget} className="nuevo-presupuesto" placeholder="Añade tu presupuesto" />
            </div>
            <input type="submit" value="Añadir" />
            {message && <Message type="error">No es un presupuesto válido</Message>}
        </form>
    </div>
  )
}

export default NewBudget