import { FC } from 'react'
import CalculatorButton from './CalculatorButton'

const OperationButtons: FC = () => {
  const operationButtons: string[] = ['/', 'X', '-', '+']

  return (
    <div className="OperationButtons">
      {operationButtons.map(i => (
        <CalculatorButton label={i} type="operator" value={i} key={i} />
      ))}
    </div>
  )
}

export default OperationButtons
