import type { HeadertitleProps } from "../../../types/types";

export default function Headertitle({BoardTitle} : HeadertitleProps) {
  return (
    <h1 className="text-white font-bold  lg:text-3xl md:text-2xl text-xl">
      {BoardTitle}
    </h1>
  )
}
