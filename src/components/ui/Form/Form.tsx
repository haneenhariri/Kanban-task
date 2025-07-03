import { useCallback, useState, type FormEvent } from "react";
import Input from "../Input/Input";
import CloseButton from "../Button/CloseButton";
import SubmitButton from "../Button/SubmitButton";
import type { FormProps } from "@/types/types";


export default function Form({ onClose, placeholder, onSubmit }: FormProps) {
  const [value, setValue] = useState('');

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      if (value.trim()) {
        onSubmit(value);
        setValue('');
      }
    },
    [value, onSubmit]
  );

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <Input 
        value={value} 
        setValue={setValue} 
        placeholder ={placeholder}
      />
      <div className="my-2.5 w-full flex gap-2.5 items-center">
        <SubmitButton className="bg-white/25 hover:bg-white/40 dark:bg-slate-600/50 dark:hover:bg-slate-500/60 text-white transition-colors duration-200" label="Save"/>
        <CloseButton onClose={onClose} />
      </div>
    </form>
  );
}