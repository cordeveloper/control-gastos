import { useState } from 'react';
import Header from './components/Header';
import iconNewBudget from './img/nuevo-gasto.svg';
import Modal from './components/Modal';

const App = () => {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);

  const handleNewBudget = () => {
    setModal(true);
  }

  return(
    <div>
      <Header budget={budget} 
              setBudget={setBudget} 
              setIsValidBudget={setIsValidBudget} 
              isValidBudget={isValidBudget} />

      {
        isValidBudget &&
        <div className="nuevo-gasto">
          <img onClick={handleNewBudget} src={iconNewBudget} alt="" />
        </div>
      }

      {
        modal && <Modal setModal={setModal} />
      }

    </div>
  )
}

export default App;
