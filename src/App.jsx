import { useState } from 'react';
import Header from './components/Header';

const App = () => {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);

  return(
    <div>
      <Header budget={budget} 
              setBudget={setBudget} 
              setIsValidBudget={setIsValidBudget} 
              isValidBudget={isValidBudget} />
    </div>
  )
}

export default App;
