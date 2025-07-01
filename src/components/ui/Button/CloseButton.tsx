import close from '../../../assets/icons/close-x.svg'

interface CloseButtonProps {
  setShowForm: (value: boolean) => void;
}

export default function CloseButton({ setShowForm }: CloseButtonProps) {
  return (
    <button onClick={() => setShowForm(false)} type="button">
      <img src={close} className="w-5 h-5" alt="close" />
    </button>
  )
}