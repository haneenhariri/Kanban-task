export interface InputProps 
{
    place : string;
    value : string;
    setValue: (value: string) => void;
}
export default function Input({place , value , setValue} : InputProps) {
  return (
    <input type='text' value={value} onChange={ (e) => setValue(e.target.value)} className=" w-full bg-white/10  p-2 rounded-sm outline-blue-400 placeholder:text-white" placeholder={place} />
  )
}
