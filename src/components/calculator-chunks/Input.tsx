import { FC } from 'react'
import { useAppSelector } from '../../hooks'

const Input: FC = () => {
  const displayValue = useAppSelector(state => state.calculator.displayValue)
  return <div className="display">{displayValue}</div>
}

export default Input
