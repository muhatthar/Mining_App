import { Column, Id, Task } from '../types';
import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useMemo, useState } from 'react';
import PlusIcon from '../icons/PlusIcon';
import TrashIcon from '../icons/TrashIcon';
import TaskCard from './TaskCard';

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;
  updateColumn: (id: Id, title: string) => void;

  createTask: (columnId: Id) => void;
  updateTask: (id: Id, title: string, content: string) => void;
  deleteTask: (id: Id) => void;
  tasks: Task[];
}

export default function ColumnContainer(props: Props) {
  const {
    column,
    deleteColumn,
    updateColumn,
    createTask,
    tasks,
    deleteTask,
    updateTask,
  } = props;

  const [editMode, setEditMode] = useState(false);

  const tasksIds = useMemo(() => {
    return tasks.map((task) => task.id);
  }, [tasks]);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: 'Column',
      column,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="
    bg-gray-500
    opacity-30
    w-[350px]
    h-[440px]
    max-h-[440px]
    rounded-3xl
    flex
    flex-col
    border-[#F99417]
    border-2
    "
      ></div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="
    bg-[#363062]
    w-[350px]
    h-[440px]
    max-h-[440px]
    rounded-3xl
    flex
    flex-col
    border-white
    border-2
    "
    >
      <div
        {...attributes}
        {...listeners}
        className="
      text-white
      text-md
      h-[60px]
      cursor-grab
      rounded-md
      rounded-b-none
      p-6
      font-bold
      flex
      gap-2
      items-center
      justify-between
      "
      >
        <div
          onClick={() => {
            setEditMode(true);
          }}
          className="
      text-white
      text-md
      h-[60px]
      cursor-grab
      font-bold
      flex
      items-center
      justify-between
      "
        >
          <div className="flex">
            {!editMode && column.title}
            {editMode && (
              <input
                className="
              w-[200px] bg-white text-black focus:border-[#F99417] border rounded outline-none px-2"
                value={column.title}
                onChange={(e) => updateColumn(column.id, e.target.value)}
                autoFocus
                onBlur={() => {
                  setEditMode(false);
                }}
                onKeyDown={(e) => {
                  if (e.key !== 'Enter') return;
                  setEditMode(false);
                }}
              ></input>
            )}
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <button
            className=""
            onClick={() => {
              createTask(column.id);
            }}
          >
            <PlusIcon />
          </button>
          <button
            onClick={() => {
              deleteColumn(column.id);
            }}
            className=" flex
        stroke-gray-500
        hover:stroke-white
        "
          >
            <TrashIcon />
          </button>
        </div>
      </div>

      <div className="flex flex-grow flex-col gap-4 p-2 overflow-x-hidden overflow-y-auto">
        <SortableContext items={tasksIds}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          ))}
        </SortableContext>
      </div>
      {/* <button
        className="flex gap-2 items-center p-4 border-x-columnBackgroundColor
      hover:bg-mainBackgroundColor hover:text-[#F99417]
      active:bg-white"
        onClick={() => {
          createTask(column.id);
        }}
      >
        <PlusIcon></PlusIcon>
      </button> */}
    </div>
  );
}
