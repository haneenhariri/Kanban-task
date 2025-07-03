import { useState } from "react";
import type { AddItemProps } from "@/types/types";
import Form from "../ui/Form/Form";
import AddNew from "../ui/Button/AddNew";

/**
 * AddItem Component
 *
 * A versatile component for adding new items (tasks, columns, etc.) to the Kanban board.
 * Features:
 * - Toggle between button and form states
 * - Input validation (trims whitespace, prevents empty submissions)
 * - Customizable styling through className prop
 * - Smooth transitions and hover effects
 * - Dark mode support
 *
 * Workflow:
 * 1. Initially shows an "Add New" button
 * 2. Clicking the button reveals a form
 * 3. User can submit the form or cancel
 * 4. On successful submission, calls onAdd and returns to button state
 *
 * @param props - AddItem component props
 * @param props.placeholder - Placeholder text for the input field
 * @param props.label - Text label for the add button
 * @param props.onAdd - Function called when a new item is added
 * @param props.className - Optional CSS classes for custom styling
 * @returns JSX element representing the add item component
 */
export default function AddItem({ placeholder, label, onAdd, className }: AddItemProps) {
  // State to control form visibility (button vs form)
  const [showForm, setShowForm] = useState(false);

  /**
   * Toggle between button and form states
   */
  const toggleForm = () => {
    setShowForm(prev => !prev);
  };

  /**
   * Handle form submission
   * Validates input, calls onAdd callback, and closes form
   *
   * @param value - The input value from the form
   */
  const handleSubmit = (value: string): void => {
    // Prevent empty submissions
    if (!value.trim()) return;

    // Call the onAdd callback with trimmed value
    onAdd(value.trim());

    // Close the form and return to button state
    toggleForm();
  };

  return (
    <div className={`p-2.5 rounded-lg h-min shadow-md hover:shadow-lg transition-all duration-200 backdrop-blur-sm border border-white/20 dark:border-slate-600/30 ${className}`}>
      {showForm ? (
        // Form state: Show input form for adding new item
        <Form
          placeholder={placeholder}
          onSubmit={handleSubmit}
          onClose={toggleForm}
        />
      ) : (
        // Button state: Show add new button
        <AddNew
          onClick={toggleForm}
          label={label}
        />
      )}
    </div>
  );
}
