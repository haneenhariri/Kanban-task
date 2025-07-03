import edite from '@/assets/icons/edit.svg'
export interface EditeButtonProps {
    setIsEditing: (value: boolean) => void;
}
export default function EditeButton( {setIsEditing} : EditeButtonProps) {
  return (
    <button
      className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md transition-colors duration-200"
      onClick={() => setIsEditing(true)}
      aria-label="Edit task"
    >
        <img className="w-4 h-4" src={edite} alt="edit icon" />
    </button>
  )
}
