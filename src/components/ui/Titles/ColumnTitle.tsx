import type { ColumnTitleProps } from "../../../types/types";

export default function ColumnTitle({columnTitle} : ColumnTitleProps) {
  return (
    <h2 className=" font-medium text-lg">{columnTitle}</h2>
  )
}
