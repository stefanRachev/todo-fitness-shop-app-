// components/TodoItem.js
export default function TodoItem({ task, onToggle, onDelete }) {
  return (
    <div className="flex items-center justify-between p-2 mb-2 bg-gray-100 rounded-lg">
      <span
        className={`flex-1 text-left ${
          task.completed ? "line-through text-gray-400" : ""
        }`}
        onClick={() => onToggle(task.id)}
      >
        {task.text}
      </span>
      <button
        onClick={() => onDelete(task.id)}
        className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-700"
      >
        Delete
      </button>
    </div>
  );
}
