import { HeartStraight } from "phosphor-react"
import "./styles/global.css"

import { CalcProvider } from "./context/CalcContext"

import { ResultScreen } from "./components/ResultScreen"
import { CalculatorButton } from "./components/CalculatorButton"

import keys from "./assets/keyboard.json"

export function App() {
  return (
    <CalcProvider>
      <div className="bg-gradient-to-r from-background-gradient-1 to-background-gradient-2 screen-device-height flex items-center justify-center">
        <main className="flex flex-col gap-6 pt-14 pb-8 px-8 bg-background-calculator rounded-6xl w-96 text-zinc-200 font-rubik shadow-calculator">
          <ResultScreen />
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
        <footer className="absolute bottom-0 font-rubik">
          <span className="flex gap-1 items-center justify-center mb-1 text-gray-300 text-sm">
            Made with
            <HeartStraight className="text-pink-400" />
            <a
              href="https://github.com/dsg1407"
              target="_blank"
              className="hover:text-cyan-400 transition-all"
            >
              DsG
            </a>
          </span>
        </footer>
      </div>
    </CalcProvider>
  )
}
