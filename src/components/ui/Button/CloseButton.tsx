import close from '@/assets/icons/close-x.svg';
import type { CloseButtonProps } from '../../../types/ui.types';

export default function CloseButton({onClose , IconColor } : CloseButtonProps) {
  return (
     <button 
          onClick={onClose} 
          type="button"
          aria-label="Close form"
        >
          <img src={close}  className={`w-5 h-5 ${IconColor} `} alt="Close" />
        </button>
  )
}
