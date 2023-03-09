// import { useAppDispatch } from '../../hooks'
import CalculatorButton from './CalculatorButton'

const IntegerButtons = () => {
  const integer: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  // const dispatch = useAppDispatch()

  return (
    <div className="keypad">
      {integer.map(i => {
        return <CalculatorButton label={i} type="digit" value={i} key={i} />
      })}
      <CalculatorButton label="." type="decimal" />
    </div>
  )
}

export default IntegerButtons
