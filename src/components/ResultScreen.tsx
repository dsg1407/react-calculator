import { Equals } from "phosphor-react"
import { useContext } from "react"

import { CalcContext } from "../context/CalcContext"

export function ResultScreen() {
  const { calc, calcExpression } = useContext(CalcContext)

  return (
    <section id="result" className="flex flex-col items-end gap-2 px-6">
      <p className="text-xl text-zinc-600">{calcExpression}</p>
      <div className="flex justify-between items-center w-full">
        <Equals size={20} className="text-zinc-600" />
        <p className="text-4xl overflow-x-auto">
          {Number(calc.num) ? calc.num : calc.res}
        </p>
      </div>
    </section>
  )
}
