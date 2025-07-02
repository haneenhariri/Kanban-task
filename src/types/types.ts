//all types write here 

import type { Column } from "../redux/slice/boardSlice";

export interface HeadertitleProps
{
    BoardTitle : string;
}
export interface ColumnProps {
  column: Column;
}
export interface AddColumnProps {
  onColumnAdded: (columnName: string) => void;
}