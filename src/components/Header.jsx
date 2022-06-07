import NewBudget from "./NewBudget"
import ControlBudget from "./ControlBudget"

const Header = ({budget, setBudget, setIsValidBudget, isValidBudget}) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>
        {
            isValidBudget ? 
            <ControlBudget budget={budget} />
            :
            <NewBudget  setIsValidBudget={setIsValidBudget} 
                        budget={budget} 
                        setBudget={setBudget} />
        }
    </header>
  )
}

export default Header