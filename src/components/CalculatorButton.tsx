import { ReactNode, useContext, useState } from "react"
import clsx from "clsx"
import {
  Divide,
  Equals,
  Minus,
  Percent,
  Plus,
  PlusMinus,
  X,
} from "phosphor-react"

import { CalcContext } from "../context/CalcContext"

interface CalculatorButtonProps {
  order: string
  type: string
  textName: string
  equation: string
}

interface EquationTypes {
  ".": string
  eraseAll: string
  "/": string
  "*": string
  "-": string
  "+": string
  result: string
  percent: string
  negative: string
}

interface MathTypes {
  "+": string
  "-": string
  "*": string
  "/": string
}

export function CalculatorButton({
  order,
  type,
  textName,
  equation,
}: CalculatorButtonProps) {
  const { calc, setCalc, setCalcExpression } = useContext(CalcContext)

  // User click '.'
  function commaClick() {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + equation : calc.num,
    })
  }

  // User click C
  const eraseAllClick = () => {
    setCalcExpression(`-`)
    setCalc({ sign: "", num: "0", res: 0 })
  }

  // User click CE
  const eraseClick = () => {
    setCalc({ sign: calc.sign, num: "0", res: calc.res })
  }

  // User click a number
  function handleClickNumberButton() {
    let numberValue
    if (equation === "0" && calc.num === "0") {
      numberValue = "0"
    } else {
      numberValue = Number(calc.num + equation).toString()
    }

    if (calc.res && calc.sign === "") {
      setCalc({
        ...calc,
        num: numberValue,
        res: 0,
      })
    } else {
      setCalc({
        ...calc,
        num: numberValue,
      })
    }
  }

  // User click operation
  function signClick() {
    setCalc({
      sign: equation,
      res: !calc.res && Number(calc.num) ? Number(calc.num) : calc.res,
      num: "0",
    })
  }

  // User click equals
  function equalsClick() {
    if (calc.res && calc.num && calc.sign !== "") {
      const math = (a: number, b: number, sign: string) => {
        const result = {
          "+": (a: number, b: number) => a + b,
          "-": (a: number, b: number) => a - b,
          "*": (a: number, b: number) => a * b,
          "/": (a: number, b: number) => a / b,
        }
        return result[sign as unknown as keyof MathTypes](a, b)
      }
      setCalcExpression(`${calc.res} ${calc.sign} ${calc.num}`)
      setCalc({
        res: math(calc.res, Number(calc.num), calc.sign),
        sign: "",
        num: "0",
      })
    }
  }

  // User click percent
  const percentClick = () => {
    setCalc({
      ...calc,
      num: (Number(calc.num) / 100).toString(),
    })
  }

  // User click invert button
  const invertClick = () => {
    setCalc({
      ...calc,
      num: calc.num ? (Number(calc.num) * -1).toString() : String(0),
    })
  }

  function handleButtonClick() {
    const results = {
      ".": commaClick,
      eraseAll: eraseAllClick,
      erase: eraseClick,
      "/": signClick,
      "*": signClick,
      "-": signClick,
      "+": signClick,
      result: equalsClick,
      percent: percentClick,
      negative: invertClick,
    }
    if (results[equation as unknown as keyof EquationTypes]) {
      return results[equation as unknown as keyof EquationTypes]()
    } else {
      return handleClickNumberButton()
    }
  }

  function textButton() {
    if (textName === "Percent") {
      return <Percent size={28} className="text-center" />
    } else if (textName === "Divide") {
      return <Divide size={28} />
    } else if (textName === "X") {
      return <X size={28} />
    } else if (textName === "Minus") {
      return <Minus size={28} />
    } else if (textName === "Plus") {
      return <Plus size={28} />
    } else if (textName === "PlusMinus") {
      return <PlusMinus size={28} />
    } else if (textName === "Equals") {
      return <Equals size={28} />
    } else {
      return textName
    }
  }

  return (
    <div className="flex justify-center items-center">
      <button
        className={clsx(
          "w-16 h-16 transition-all shadow-button rounded-full bg-gradient-to-b from-button-black-opacity to-button-white-opacity",
          {
            "bg-violet-800 hover:bg-violet-900": type === "equation",
            "bg-purple-800 hover:bg-purple-900": type === "result",
            "bg-background-calculator hover:bg-zinc-800":
              type === "number" ||
              type === "function" ||
              type === "functionIcon",
          },
          { "text-purple-500": order === "1" }
        )}
        onClick={handleButtonClick}
      >
        <span className="text-2xl leading-7 text-center flex items-center justify-center">
          {textButton()}
        </span>
      </button>
    </div>
  )
}
