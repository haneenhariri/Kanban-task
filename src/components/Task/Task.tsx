import TaskTitle from "../ui/Titles/TaskTitle";
import down from '../../assets/icons/arrow-down.svg'
import up from '../../assets/icons/arrow-up.svg'
import edite from '../../assets/icons/edit.svg'
import deleteIcon from '../../assets/icons/delete.svg'
import { useState } from "react";

export interface TaskProps{
  title : string;
  description : string;
  key : string;
}
export default function Task({title , description } : TaskProps) {
  const [show , setShow] = useState(false);
  const onToggle = () =>
  {
    setShow(!show)
  }
  return (
    <div className=" flex flex-col gap-2.5 border border-gray-200 shadow-sm rounded-sm p-2 bg-white">
      <div className=" w-full ">
        <button onClick={onToggle} className="items-center w-full flex justify-between">
          <TaskTitle taskTitle={title}/>
          {show ?(<img className=" w-5 h-5" src={down} alt="arrow-down" />) : (<img className=" w-5 h-5" src={up} alt="arrow-up" />)}
        </button>
        {show && (
          <div className="mt-2">
          <p className="text-base text-gray-500">{description}</p>
          <div className="flex items-center justify-end gap-2.5 mt-3">
            <button  className="p-1 hover:bg-gray-100 rounded">
              <img className="w-4 h-4" src={edite} alt="edit" />
            </button>
            <button  className="p-1 hover:bg-gray-100 rounded">
              <img className="w-5 h-5" src={deleteIcon} alt="delete" />
            </button>
          </div>
        </div>
        )}
  </div>
    </div>
  )
}
