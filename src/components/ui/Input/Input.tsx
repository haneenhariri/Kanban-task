import type { InputProps } from "../../../types/ui.types";

export default function Input({placeholder  , value , setValue} : InputProps) {
  return (
    <input
      type='text'
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="border  dark:border-slate-600/50 w-full bg-white/10 dark:bg-slate-700/30 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500  dark:placeholder:text-slate-300 transition-all duration-200"
      placeholder={placeholder}
    />
  )
}
