import "./styles/global.css"

export function App() {
  return (
    <div className="bg-gradient-to-r from-background-gradient-1 to-background-gradient-2 h-screen flex items-center justify-center ">
      <main className="flex flex-col gap-6 pt-14 pb-8 px-8 bg-background-calculator rounded-6xl w-96 text-zinc-200 font-rubik">
        <section>Calculo</section>
        <section>Teclado</section>
      </main>
    </div>
  )
}
