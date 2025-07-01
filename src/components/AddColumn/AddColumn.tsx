import { useState } from "react";
import AddNew from "../ui/Button/AddNew";
import Form from "../ui/Form/Form";

export default function AddColumn() {
  const [showForm , setShowForm] = useState(false);
  const handelShowAddForm = () => 
  {
    setShowForm(!showForm)
  }
  return (
    <div className="p-2.5 rounded-sm h-min sm:w-[300px] text-white bg-white/20 shadow-sm">
      {!showForm ? (<AddNew showForm={handelShowAddForm} addNew="Add new column"/>) :
      (<Form setShowForm={setShowForm}/>)}
    </div>
  )
}
