import React from 'react'
import { useAppDispatch } from '../../hooks'
import {
  digitPressed,
  decimalPressed,
  clearPressed,
  operatorPressed,
  equalsPressed
} from '../../store/calcSlice'

interface CalculatorButtonProps {
  label: string
  type: 'digit' | 'decimal' | 'clear' | 'operator' | 'equals'
  value?: string
}

function CalculatorButton({ label, type, value }: CalculatorButtonProps) {
  const dispatch = useAppDispatch()

  function handleClick() {
    switch (type) {
      case 'digit':
        dispatch(digitPressed({ digit: value! }))
        break
      case 'decimal':
        dispatch(decimalPressed())
        break
      case 'clear':
        dispatch(clearPressed())
        break
      case 'operator':
        dispatch(operatorPressed({ operator: value! }))
        break
      case 'equals':
        dispatch(equalsPressed())
        break
      default:
        throw new Error(`Unknown button type: ${type}`)
    }
  }

  return <button onClick={handleClick}>{label}</button>
}

export default CalculatorButton
