import React, { createContext, useReducer } from "react"
import { weatherConstant } from './constants/weather'

const Reducer = (state, action) => {
  switch (action.type) {
    case weatherConstant.ADD_WEATHER:
      return {
        ...state,
        weather: action.payload
      }
    case weatherConstant.REMOVE_WEATHER:
      return {
        ...state,
        weather: null
      }

    default:
      return state
  }
}

const initialState = {
  weather: null
}

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState)
  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}

export const Context = createContext(initialState)
export default Store