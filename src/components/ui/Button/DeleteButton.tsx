import deleteIcon from '@/assets/icons/delete.svg'
export interface DeleteButtonProps {
    handleDelete: () => void;
}
export default function DeleteButton( {handleDelete} : DeleteButtonProps) {
  return (
    <button
      onClick={handleDelete}
      className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 rounded-md transition-all duration-200"
      aria-label="Delete task"
    >
        <img className="w-5 h-5" src={deleteIcon} alt="delete" />
    </button>
  )
}
