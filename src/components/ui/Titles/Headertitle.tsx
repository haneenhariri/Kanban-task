import type { HeadertitleProps } from "../../../types/types";

export default function Headertitle({BoardTitle} : HeadertitleProps) {
  return (
    <h1 className="font-bold lg:text-4xl md:text-3xl text-2xl text-gray-800 dark:text-white transition-colors duration-200">
      {BoardTitle}
    </h1>
  )
}
