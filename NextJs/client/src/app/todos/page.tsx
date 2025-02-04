"use client";
import { useState } from "react";

export default function Todos() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([1, 2, 3]);
  const [editMode, setEditMode] = useState(false);

  if (editMode) {
    return (
      <div className="flex flex-col items-center gap-8 pt-8 bg-violet-200 pb-32">
        <div className="text-2xl">Edit Todo</div>
        <div className="flex gap-4">
          <div className="text-lg">Edit desc:</div>
          <input
            className="rounded-md shadow-md text-lg"
            type="text"
            placeholder="Enter new Desc"
          />
        </div>
        <div className="flex gap-4">
            <div className="text-lg">Edit Completed:</div>
            <input type="checkbox" />
        </div>
        <button className="text-xl shadow-md bg-blue-600 text-white hover:bg-blue-500 rounded-md px-3 py-1">
                  Submit
                </button>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center gap-8 pt-8 bg-violet-200 pb-32">
      <div className="text-2xl">Todos List</div>
      <div className="flex gap-2">
        <input
          className="text-xl rounded-md shadow-md"
          type="text"
          placeholder="Enter Todo"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button className="text-xl shadow-md bg-blue-600 text-white hover:bg-blue-500 rounded-md px-3 py-1">
          Add
        </button>
        <button className="text-xl shadow-md bg-gray-600 text-white hover:bg-gray-500 rounded-md px-3 py-1">
          Clear
        </button>
      </div>
      <div className="w-5/6 flex flex-col gap-2">
        {todos.map((todo, index) => {
          return (
            <div className="bg-violet-600 flex justify-between items-center p-2 rounded-lg shadow-md">
              <div className="flex gap-2">
                <input type="checkbox" />
                <div className="text-lg text-white">Write Code</div>
              </div>
              <div className="flex gap-2 ">
                <button className="text-xl shadow-md bg-green-600 text-white hover:bg-blue-500 rounded-md px-1">
                  Edit
                </button>
                <button className="text-xl shadow-md bg-red-600 text-white hover:bg-blue-500 rounded-md px-1">
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
