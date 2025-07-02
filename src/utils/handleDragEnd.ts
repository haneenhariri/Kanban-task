import type { DropResult } from '@hello-pangea/dnd';
import { reorderColumns, moveTask, type Column } from '../redux/slice/boardSlice';
import type { AppDispatch } from '../redux/store/store';

// متغير لمنع السحب المتعدد
let isDragging = false;

export const handleDragEnd = (
  result: DropResult,
  columns: Column[],
  dispatch: AppDispatch
) => {
  // منع السحب المتعدد
  if (isDragging) return;
  isDragging = true;

  const { source, destination, type } = result;

  // إذا المستخدم أفلت العنصر خارج مكان صحيح
  if (!destination) {
    isDragging = false;
    return;
  }

  // إذا تم إفلات العنصر في نفس المكان
  if (
    source.droppableId === destination.droppableId &&
    source.index === destination.index
  ) {
    isDragging = false;
    return;
  }

  // 🟦 إعادة ترتيب الأعمدة
  if (type === 'column') {
    const newColumns = Array.from(columns);
    const [removed] = newColumns.splice(source.index, 1);
    newColumns.splice(destination.index, 0, removed);

    dispatch(reorderColumns(newColumns));
    isDragging = false;
    return;
  }

  // 🟨 نقل مهمة بين الأعمدة أو داخل نفس العمود
  if (type === 'task') {
    dispatch(
      moveTask({
        source,
        destination,
      })
    );
  }

  // إعادة تعيين حالة السحب
  isDragging = false;
};
