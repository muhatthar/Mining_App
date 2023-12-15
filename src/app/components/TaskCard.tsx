import { useState } from 'react';
import TrashIcon from '../icons/TrashIcon';
import { Id, Task } from '../types';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface Props {
  task: Task;
  deleteTask: (id: Id) => void;
  updateTask: (id: Id, title: string, content: string) => void;
}

export default function TaskCard({ task, deleteTask, updateTask }: Props) {
  const [mouseIsOver, setMouseOver] = useState(false);
  const [editMode, setEditMode] = useState(false);
  // const [title, setTitle] = useState(task.title || '');
  const [editField, setEditField] = useState('');

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: 'Task',
      task,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const toggleEditMode = (field: string) => {
    setEditMode((prev) => !prev);
    setMouseOver(false);
    setEditField(field);
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="opacity-30 bg-gray-100 p-2.5 min-h-[100px] items-center flex text-left rounded-xl border-2 border-[#F99417] cursor-grab relative"
      ></div>
    );
  }

  if (editMode) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="bg-white p-6 mx-4 h-[160px] min-h-[160px] items-center flex flex-col gap-4 text-left rounded-[20px] hover:ring-2 hover:ring-inset hover:ring-[#F99417] cursor-grab relative"
      >
        {editField === 'title' && (
          <input
            type="text"
            placeholder="Title"
            className=" h-[20%] w-full bg-transparent font-semibold focus:outline-none overflow-x-hidden
"
            value={task.title}
            autoFocus
            onBlur={() => toggleEditMode('')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && e.shiftKey) toggleEditMode('');
            }}
            onChange={(e) => updateTask(task.id, e.target.value, task.content)}
          ></input>
        )}

        {editField === 'content' && (
          <textarea
            className="h-[70%] w-full resize-none border-none rounded bg-transparent text-black text-xs focus:outline-none overflow-x-hidden "
            value={task.content}
            placeholder="Task content here"
            autoFocus
            onBlur={() => toggleEditMode('')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && e.shiftKey) toggleEditMode('');
            }}
            onChange={(e) => updateTask(task.id, task.title, e.target.value)}
          ></textarea>
        )}
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-white p-6 mx-4 h-[160px] min-h-[160px] items-center flex flex-col gap-4 text-left rounded-[20px] hover:ring-2 hover:ring-inset hover:ring-[#F99417] cursor-grab relative task"
      onMouseEnter={() => {
        setMouseOver(true);
      }}
      onMouseLeave={() => {
        setMouseOver(false);
      }}
    >
      <h3
        onClick={() => toggleEditMode('title')}
        className="my-auto h-[20%] w-full overflow-y-hidden overflow-x-hidden whitespace-pre-warp"
      >
        {task.title}
      </h3>
      <p
        onClick={() => toggleEditMode('content')}
        className="my-auto h-[70%] w-full overflow-y-auto text-xs overflow-x-hidden whitespace-pre-warp"
      >
        {task.content}
      </p>
      {mouseIsOver && (
        <button
          onClick={() => {
            deleteTask(task.id);
          }}
          className="stroke-black absolute right-4 top-1/2-translate-y-1/2"
        >
          <TrashIcon />
        </button>
      )}
    </div>
  );
}
