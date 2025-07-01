export interface TaskTitleProps
{
    taskTitle : string;
}
export default function TaskTitle({taskTitle} : TaskTitleProps) {
  return (
    <h2 className="font-normal text-lg">{taskTitle}</h2>
  )
}
