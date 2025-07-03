
export default function TaskDescription({description} : {description: string}) {
  return (
    <p className="text-sm text-gray-600 dark:text-slate-300 whitespace-pre-wrap leading-relaxed transition-colors duration-200">{description}</p>

  )
}
