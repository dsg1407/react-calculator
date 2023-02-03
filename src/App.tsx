import { Equals } from "phosphor-react"
import "./styles/global.css"

import { CalculatorButton } from "./components/CalculatorButton"

import keys from "./assets/keyboard.json"

export function App() {
  return (
    <div className="bg-gradient-to-r from-background-gradient-1 to-background-gradient-2 h-screen flex items-center justify-center ">
      <main className="flex flex-col gap-6 pt-14 pb-8 px-8 bg-background-calculator rounded-6xl w-96 text-zinc-200 font-rubik shadow-calculator">
        <section id="result" className="flex flex-col items-end gap-2 px-6">
          <p className="text-xl text-zinc-600">1 + 1</p>
          <div className="flex justify-between items-center w-full">
            <Equals size={20} className="text-zinc-600" />
            <p className="text-4xl">2</p>
          </div>
        </section>
        <section
          id="keyboard"
          className="grid grid-cols-4 place-content-center gap-3 justify-center items-center"
        >
          {keys.map((key) => {
            return (
              <CalculatorButton
                key={key.order}
                order={key.order}
                type={key.type}
                textName={key.textName}
                equation={key.equation}
              />
            )
          })}
        </section>
      </main>
    </div>
  )
}
