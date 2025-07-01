import add from '../../../assets/icons/+.svg'
export interface AddNewbuttonProps 
{
    addNew : string;
    showForm : () => void;
}
export default function AddNew({addNew , showForm} : AddNewbuttonProps) {
  return (
    <button onClick={showForm} className=" w-full flex gap-2 items-center">
      <img src={add} alt="add" className=' w-4 h-4' />
      <p>{addNew}</p>
    </button>
  )
}
