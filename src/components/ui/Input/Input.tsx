export interface InputProps 
{
    place : string;
}
export default function Input({place} : InputProps) {
  return (
    <input type='text' className=" w-full bg-white/10  p-2 rounded-sm outline-blue-400 placeholder:text-white" placeholder={place} />
  )
}
