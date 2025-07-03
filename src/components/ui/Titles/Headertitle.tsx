import type { HeadertitleProps } from "@/types/types";

/**
 * HeaderTitle Component
 *
 * Main header title component for the application.
 * Features:
 * - Responsive text sizing (2xl on mobile, 3xl on md, 4xl on lg+)
 * - Dark mode support with smooth color transitions
 * - Bold font weight for prominence
 * - Semantic H1 element for accessibility
 *
 * @param props - HeaderTitle component props
 * @param props.BoardTitle - The title text to display
 * @returns JSX element representing the main header title
 */
export default function Headertitle({BoardTitle}: HeadertitleProps) {
  return (
    <h1 className="font-bold lg:text-4xl md:text-3xl text-2xl text-gray-800 dark:text-white transition-colors duration-200">
      {BoardTitle}
    </h1>
  )
}
