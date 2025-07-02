import { useState } from "react";
import AddNew from "../ui/Button/AddNew";
import Form from "../ui/Form/Form";
import type { AddColumnProps } from "../../types/types";

export default function AddColumn({onColumnAdded} : AddColumnProps) {
  const [showForm , setShowForm] = useState(false);

  const toggleForm  = () => 
  {
    setShowForm(prev => !prev)
  }
  const handleAddColumn = (columnName: string) => {
    onColumnAdded(columnName);
    toggleForm();
  };
  return (
    <div className="p-2.5 rounded-sm h-min sm:w-[300px] text-white bg-white/20 shadow-sm">
      {showForm ? (
        <Form 
          placeholder="Add new column" 
          onSubmit={handleAddColumn}
          onClose={toggleForm}
        />
      ) : (
        <AddNew 
          onClick={toggleForm} 
          label="Add new column"
        />
      )}
    </div>
  )
}
