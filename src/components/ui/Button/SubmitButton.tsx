export interface SubmitButtonProps {
    label : string;
    className?: string;
}
export default function SubmitButton({label , className} : SubmitButtonProps) {
  return (
        <button  type="submit"  className={`${className} px-10 py-2  rounded-sm  transition-colors`}>
          {label}
        </button> 
  )
}
