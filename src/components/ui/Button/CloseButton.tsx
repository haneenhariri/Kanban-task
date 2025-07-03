import close from '@/assets/icons/close-x.svg';
import type { CloseButtonProps } from '@/types/types';

/**
 * CloseButton Component
 *
 * A reusable close button component with an X icon.
 * Features:
 * - Accessible with proper aria-label
 * - Customizable icon color through props
 * - Consistent sizing and styling
 * - Used in forms and modals for closing functionality
 *
 * @param props - CloseButton component props
 * @param props.onClose - Function called when close button is clicked
 * @param props.IconColor - Optional CSS class for icon color customization
 * @returns JSX element representing the close button
 */
export default function CloseButton({onClose, IconColor}: CloseButtonProps) {
  return (
     <button
          onClick={onClose}
          type="button"
          aria-label="Close form"
        >
          <img src={close} className={`w-5 h-5 ${IconColor}`} alt="Close" />
        </button>
  )
}
