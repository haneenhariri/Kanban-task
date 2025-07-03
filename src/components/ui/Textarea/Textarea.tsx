export interface TextareaProps {
  editDescription: string;
  setEditDescription: (value: string) => void;
}

export default function Textarea({editDescription , setEditDescription} : TextareaProps) {
  return (
    <textarea
      value={editDescription}
      onChange={(e) => setEditDescription(e.target.value)}
      placeholder="Task Description"
      rows={4}
      className="border border-gray-300 dark:border-slate-600 rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-slate-400 transition-all duration-200"
    />
  )
}
