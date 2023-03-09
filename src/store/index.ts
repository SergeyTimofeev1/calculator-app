import { configureStore } from '@reduxjs/toolkit'
import calcReducer from './calcSlice'

const store = configureStore({
  reducer: {
    calculator: calcReducer
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
