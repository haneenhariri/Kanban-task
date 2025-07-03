import { useState } from "react";
import type { AddItemProps } from "@/types/ui.types";
import Form from "../ui/Form/Form";
import AddNew from "../ui/Button/AddNew";

export default function AddItem({ placeholder, label, onAdd, className }: AddItemProps) {
  const [showForm , setShowForm] = useState(false);
  
  const toggleForm  = () => 
  {
    setShowForm(prev => !prev)
  }
    const handleSubmit = (value: string): void => {
    if (!value.trim()) return; 

    onAdd(value.trim());
    toggleForm();
    };
  return (
    <div className={`p-2.5 rounded-lg h-min shadow-md hover:shadow-lg transition-all duration-200 backdrop-blur-sm border border-white/20 dark:border-slate-600/30 ${className}`}>
      {showForm ? (
        <Form
          placeholder={placeholder} 
          onSubmit={handleSubmit}
          onClose={toggleForm}
        />
      ) : (
        <AddNew
          onClick={toggleForm} 
          label={label}
        />
      )}
    </div>
  )
}
