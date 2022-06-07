

const ControlBudget = ({budget}) => {

  const formatCurrency = (number) => {
      return (
          number.toLocaleString(
            'en-Us',{
                style: 'currency',
                currency: 'USD'
            }
        )
      )
  }
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            <p>Gráfica aquí</p>
        </div>
        <div>
            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto:</span> {formatCurrency(budget)}
                </p>
            </div>
            <div className="contenido-presupuesto">
                <p>
                    <span>Disponible:</span> $0
                </p>
            </div>
            <div className="contenido-presupuesto">
                <p>
                    <span>Gastado:</span> $0
                </p>
            </div>
        </div>
    </div>
  )
}

export default ControlBudget