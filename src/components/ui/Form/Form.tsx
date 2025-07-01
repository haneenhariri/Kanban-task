import { useState, type FormEvent } from "react";
import Input from "../Input/Input";
import close from '../../../assets/icons/close-x.svg';

export interface FormProps {
  onClose: () => void;
  placeholder: string;
  onSubmit: (value: string) => void;
}

export default function Form({ onClose, placeholder, onSubmit }: FormProps) {
  const [value, setValue] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onSubmit(value);
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <Input 
        value={value} 
        setValue={setValue} 
        place={placeholder}
      />
      <div className="my-2.5 w-full flex gap-2.5 items-center">
        <button 
          type="submit" 
          className="px-10 py-2 bg-white/15 rounded-sm hover:bg-white/25 transition-colors"
        >
          Save
        </button> 
        <button 
          onClick={onClose} 
          type="button"
          className="p-1 hover:bg-white/10 rounded"
          aria-label="Close form"
        >
          <img src={close} className="w-5 h-5" alt="Close" />
        </button>
      </div>
    </form>
  );
}