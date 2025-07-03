import { useCallback, useState } from "react";
import Textarea from "../Textarea/Textarea";
import SubmitButton from "../Button/SubmitButton";
import CloseButton from "../Button/CloseButton";
import { useDispatch } from "react-redux";
import { editeTask } from "@/redux/slice/boardSlice";
import type { EditFormTaskProps } from "@/types/types";
import Input from "../Input/Input";

export default function EditFormTask({title , description , columnId , taskId , onClose} : EditFormTaskProps) {
    const [editTitle, setEditTitle] = useState(title);
    const [editDescription, setEditDescription] = useState(description);
    const dispatch = useDispatch();
    const handleSave = useCallback(
    (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(
        editeTask({
            columnId,
            taskId,
            updatedTask: { 
            title: editTitle.trim(), 
            description: editDescription.trim() 
            }
        })); onClose();},[columnId, taskId, editTitle, editDescription, dispatch, onClose]
    );
    return (
        <form onSubmit={handleSave} className="flex flex-col gap-3">
            <Input value={editTitle} setValue={setEditTitle} placeholder="Task Titl" />
            <Textarea editDescription={editDescription} setEditDescription={setEditDescription} />
            <div className="flex gap-2 justify-end">
                <SubmitButton className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white transition-colors duration-200" label="Save" />
                <CloseButton IconColor="invert" onClose={onClose} />
            </div>
        </form>
    )
}
