import { useState } from "react";
import AddNew from "../ui/Button/AddNew";
import Form from "../ui/Form/Form";

export default function AddTask() {
    const [showForm , setShowForm] = useState(false);
    const handelShowAddForm = () => 
    {
      setShowForm(!showForm)
    }
  return (
    <div className="p-2.5 rounded-sm h-min  text-white bg-blue-950 shadow-sm">
        {!showForm ? (<AddNew showForm={handelShowAddForm} addNew="Add new Task"/>) :
        (<Form setShowForm={setShowForm}/>)}
    </div>
  )
}
