import { Equals } from "phosphor-react"
import "./styles/global.css"

export function App() {
  return (
    <div className="bg-gradient-to-r from-background-gradient-1 to-background-gradient-2 h-screen flex items-center justify-center ">
      <main className="flex flex-col gap-6 pt-14 pb-8 px-8 bg-background-calculator rounded-6xl w-96 text-zinc-200 font-rubik shadow-calculator">
        <section id="result" className="flex flex-col items-end gap-2 px-5">
          <p className="text-xl text-zinc-600">1 + 1</p>
          <div className="flex justify-between items-center w-full">
            <Equals size={20} className="text-zinc-600" />
            <p className="text-4xl">2</p>
          </div>
        </section>
        <section id="keyboard">Teclado</section>
      </main>
    </div>
  )
}
