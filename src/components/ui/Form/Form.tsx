import Input from "../Input/Input";
import close from '../../../assets/icons/close-x.svg'
export interface FormProps 
{
  setShowForm: (value: boolean) => void; 
}
export default function Form({setShowForm} : FormProps) {
  return (
    <form className=" w-full ">
      <Input place={'add column'}/>
      <div className=" my-2.5 w-full flex gap-2.5 items-center">
        <button className=" px-10 py-2 bg-white/15 rounded-sm " type="submit">save </button> 
        <button onClick={() => setShowForm(false)} type="button">
            <img src={close} className=" w-5 h-5" alt="close" />
        </button>
      </div>
    </form>
  )
}
