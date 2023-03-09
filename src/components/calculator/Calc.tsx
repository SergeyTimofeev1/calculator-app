import { FC } from 'react'
import Input from '../calculator-chunks/Input'
import IntegerButtons from '../calculator-chunks/IntegerButtons'
import EqualsButton from '../calculator-chunks/EqualsButton'
import OperationButtons from '../calculator-chunks/OperationButtons'

const Calc: FC = () => {
  return (
    <div className="Calc">
      <div className="calculator">
        <Input />
        <OperationButtons />
        <IntegerButtons />
        <EqualsButton />
      </div>
    </div>
  )
}

export default Calc
