import add from '../../../assets/icons/+.svg'
export interface AddNewbuttonProps 
{
    label : string;
    onClick : () => void;
}
export default function AddNew({label , onClick} : AddNewbuttonProps) {
  return (
    <button onClick={onClick} className=" w-full flex gap-2 items-center">
      <img src={add} alt="add" className=' w-4 h-4' />
      <p>{label}</p>
    </button>
  )
}
