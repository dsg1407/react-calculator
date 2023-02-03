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

interface CalculatorButtonProps {
  order: string
  type: string
  textName: string
  equation: string
}

export function CalculatorButton({
  order,
  type,
  textName,
  equation,
}: CalculatorButtonProps) {
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
      >
        <span className="text-2xl leading-7 text-center flex items-center justify-center">
          {textButton()}
        </span>
      </button>
    </div>
  )
}
