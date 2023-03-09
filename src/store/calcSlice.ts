import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CalculatorState {
  displayValue: string
  operator: string | null
  operand: string | null
  hasDecimal: boolean
}

interface DigitPressedPayload {
  digit: string
}

interface OperatorPressedPayload {
  operator: string
}

const initialState: CalculatorState = {
  displayValue: '0',
  operator: null,
  operand: null,
  hasDecimal: false
}

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    digitPressed: (state, action: PayloadAction<DigitPressedPayload>) => {
      const { digit } = action.payload
      if (state.displayValue === '0' || state.displayValue === state.operand) {
        state.displayValue = digit
      } else {
        state.displayValue += digit
      }
    },
    decimalPressed: state => {
      if (!state.hasDecimal) {
        state.displayValue += '.'
        state.hasDecimal = true
      }
    },
    clearPressed: state => {
      state.displayValue = '0'
      state.operator = null
      state.operand = null
      state.hasDecimal = false
    },
    operatorPressed: (state, action: PayloadAction<OperatorPressedPayload>) => {
      const { operator } = action.payload
      if (state.operator === null) {
        state.operator = operator
        state.operand = state.displayValue
        state.displayValue = '0'
        state.hasDecimal = false
      } else {
        state.operand = calculate(state)
        state.operator = operator
        state.displayValue = '0'
        state.hasDecimal = false
      }
    },
    equalsPressed: state => {
      state.operand = calculate(state)
      state.operator = null
      state.hasDecimal = state.operand.includes('.')
      state.displayValue = state.operand
    }
  }
})

function calculate(state: CalculatorState): string {
  if (state.operator === null || state.operand === null) {
    return state.displayValue
  }

  const operand1 = parseFloat(state.operand)
  const operand2 = parseFloat(state.displayValue)

  switch (state.operator) {
    case '+':
      return (operand1 + operand2).toString()
    case '-':
      return (operand1 - operand2).toString()
    case 'X':
      return (operand1 * operand2).toString()
    case '/':
      return (operand1 / operand2).toString()
    case '%':
      return ((operand1 / 100) * operand2).toString()
    default:
      throw new Error(`Unknown operator ${state.operator}`)
  }
}

export const { digitPressed, decimalPressed, clearPressed, operatorPressed, equalsPressed } =
  calculatorSlice.actions

export default calculatorSlice.reducer
