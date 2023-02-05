import React, { createContext, useState, ReactNode } from "react"

interface CalcProps {
  sign: string
  num: string
  res: number
}

interface CalcContextProps {
  calc: CalcProps
  setCalc: React.Dispatch<React.SetStateAction<CalcProps>>
  calcExpression: string
  setCalcExpression: React.Dispatch<React.SetStateAction<string>>
}

export const CalcContext = createContext({} as CalcContextProps)

export function CalcProvider({ children }: any) {
  const [calcExpression, setCalcExpression] = useState("-")
  const [calc, setCalc] = useState<CalcProps>({
    sign: "",
    num: "0",
    res: 0,
  })

  const providerValue = {
    calc,
    setCalc,
    calcExpression,
    setCalcExpression,
  }

  return (
    <CalcContext.Provider value={providerValue}>
      {children}
    </CalcContext.Provider>
  )
}
