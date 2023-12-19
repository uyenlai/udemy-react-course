import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleValueChange(e) {
    setEnteredTask(e.target.value);
  }

  function handleClick() {
    setEnteredTask("");

    if (enteredTask.trim() === "") {
      return;
    }
    onAdd(enteredTask);
  }
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        value={enteredTask}
        onChange={handleValueChange}
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-lime-600"
      >
        Add task
      </button>
    </div>
  );
}
